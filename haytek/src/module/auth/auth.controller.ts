import { Router } from 'express'
import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userRepository from '../user/user.repository'
import authMiddleware from '../../middleware/auth'
import { loginSchema } from './auth.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'

export const router = Router()

router.post('/login', schemaValidateMiddleware(loginSchema), async (req: Request, res: Response) => {
  // TODO verificar se o e-mail existe na base
  const user = await userRepository.getByEmail(res.locals.validated.email)

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
  const verifyPassword = bcrypt.compareSync(res.locals.validated.password, user.password)
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