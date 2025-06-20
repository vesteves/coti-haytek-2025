import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from './user.repository'
export const router = Router()

router.get('/', (req: Request, res: Response) => {
  const data = userRepository.getAll()
  
  res.json({
    data
  })
})

router.post('/', (req: Request, res: Response) => {
  const data = userRepository.store(req.body)

  res.json({
    data: data ? 'Usuário cadastrado' : 'Erro ao cadastrar usuário'
  })
})

export default router