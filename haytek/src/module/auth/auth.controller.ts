import { Router } from 'express'
import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userRepository from '../user/user.repository'
import authMiddleware from '../../middleware/auth'
import { loginSchema } from './auth.schema'

export const router = Router()

router.post('/login', async (req: Request, res: Response) => {
  try {
    loginSchema.parse(req.body)
  } catch (error: any) {
    res.status(422).json({
      error: error.errors
    })
    return
  }

  // TODO verificar se o e-mail existe na base
  const user = await userRepository.getByEmail(req.body.email)

  if (!user) {
    res.status(404).json({
      error: "Usuário não encontrado"
    })
    return
  }

  if (typeof user === 'string') {
    res.status(500).json({
      error: user
    })
    return
  }
  // TODO verificar a senha
  const verifyPassword = bcrypt.compareSync(req.body.password, user.password)
  if (!verifyPassword) {
    res.status(401).json({
      error: "Usuário e senha não conferem"
    })
    return
  }

  const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET || 'secret');

  res.json(token)
})

router.get('/me', authMiddleware, async (req: Request, res: Response) => {
  res.json({ user: res.locals.user })
})

export default router