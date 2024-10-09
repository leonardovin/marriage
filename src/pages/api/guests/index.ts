import type { NextApiRequest, NextApiResponse } from "next"
import {getSession} from 'next-auth/react'
import prisma from "../../../lib/prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({req})

  if (!session) {
    return res.status(401).json({message: 'Unauthorized'})
  }

  if (req.method === 'GET'){
    const guests = await prisma.guest.findMany();
    return res.status(200).json(guests);
  }

  if (req.method === 'POST') {
    const {name, email} = req.body
    const guest = await prisma.guest.create({
      data: {
        name,
        email,
        admin: {connect: {email: session.user.email}},
      }
    });
    return res.status(201).json(guest);
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({message: `Method ${req.method} Not Allowed`})
}