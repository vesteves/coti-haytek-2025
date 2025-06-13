import { Router } from 'express'
import type { Request, Response } from 'express'
import type { User } from './user.d'
export const router = Router()

const users:User[] = []

router.get('/user', (req: Request, res: Response) => {
  res.json({
    data: users
  })
})

router.post('/user', (req: Request, res: Response) => {
  const body = req.body as User
  users.push(body)

  res.json({
    data: 'Usuário cadastrado'
  })
})

export default router