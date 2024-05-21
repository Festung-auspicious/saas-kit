import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongo"
import { authConfig } from "../../auth.config"
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}= 
NextAuth({
    ...authConfig ,
  adapter: MongoDBAdapter(clientPromise,{databaseName:"Shop"}),
})
