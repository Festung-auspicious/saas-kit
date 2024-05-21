import type { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { z } from "zod";
import {compare} from "bcrypt-ts";
import { getUserByEmail } from "@/lib/services/userServices";
import Email from "next-auth/providers/sendgrid";
import config from "./settings";

export const authConfig:NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // if you wnat to use credentials provider strategy will be 'jwt'  
  session:{strategy:config.appInfo.sendGridLogin ? 'database' : 'jwt'},
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
          const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUserByEmail(email);
          if (!user) return null;

          const passwordsMatch = await compare(password, user.password);
          if (passwordsMatch) return {email: user.email, name:user.name, id: user._id};
        }
        return null;
      },
    }),
    Email({
      name:'sendgrid',
      apiKey: process.env.SENDGRID_API_KEY,
      from: process.env.EMAIL_FROM,
      maxAge: 5 * 60
    })
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user;
      let isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return true;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
