import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";



const GOOGLE_CLIENT_ID =  process.env.GOOGLE_CLIENT_ID || ''
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || ''
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || ''


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    })
  ],
  adapter: PrismaAdapter(new PrismaClient()),
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async session({session, token, user}) {
      session.user.id = user.id
      return session
    }
  }
})