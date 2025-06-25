import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from './user.repository'
export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const data = await userRepository.getAll()
  
  res.json({
    data
  })
})

router.get('/:id', async (req: Request, res: Response) => {
  const data = await userRepository.getById(req.params.id)
  
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