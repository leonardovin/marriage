import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";



const GOOGLE_CLIENT_ID =  process.env.GOOGLE_CLIENT_ID || ''
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || ''
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || ''


const prisma = new PrismaClient();


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
    async signIn({ user, account }) {
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email as string },
      });
  
      if (existingUser) {
        // If user exists, you can link the OAuth account
        await prisma.account.upsert({
          where: {
            provider_providerAccountId: {
              provider: account!.provider,
              providerAccountId: account!.providerAccountId,
            },
          },
          update: {
            userId: existingUser.id,
          },
          create: {
            userId: existingUser.id,
            provider: account!.provider,
            providerAccountId: account!.providerAccountId,
          },
        });
        return true; // Allow sign-in
      }
  
      return false; // Prevent sign-in if no account is linked
    },
    async session({session, token, user}) {
      session.user.id = user.id
      session.user.name = user.name || ''
      return session
    }
  }
})