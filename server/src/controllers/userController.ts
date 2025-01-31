import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving users: ${error.message}` })
  }
}

export const getUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { cognitoId } = req.params
  try {
    const user = await prisma.user.findUnique({
      where: {
        cognitoId: cognitoId
      }
    })
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving user: ${error.message}` })
  }
}

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      username,
      cognitoId,
      profilePictureUrl = 'i1.jpg',
      teamId = 1
    } = req.body
    const newUser = await prisma.user.create({
      data: {
        username,
        cognitoId,
        profilePictureUrl,
        teamId 
      }
    })
  } catch (error: any) {
    res.status(500).json({ message: `Error creating user: ${error.message}` })
  }
}
