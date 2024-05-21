import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/shared/Provider/ThemeProvider";
import { Themer } from "@/shared/Provider/Themer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiply",
  description: "Your All in on SaaS Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Themer>
        <SessionProvider>
          <body className={inter.className}>
            {children}
            <Toaster position="top-right" reverseOrder={false} />
          </body>
        </SessionProvider>
      </Themer>
    </ThemeProvider>
  );
}
