import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from './user.repository'
import { userStoreSchema } from './user.schema'
export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const response = await userRepository.getAll()

  if (typeof response === 'object') {
    res.json({
      data: response
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

router.get('/:id', async (req: Request, res: Response) => {
  const response = await userRepository.getById(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response !== null ? response : 'Usuário não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

router.post('/', async (req: Request, res: Response) => {
  try {
    userStoreSchema.parse(req.body)
  } catch (error: any) {
    res.status(422).json({
      error: error.errors
    })
    return
  }

  const response = await userRepository.store(req.body)

  if (typeof response === 'object') {
    res.json({
      data: response
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

router.put('/:id', async (req: Request, res: Response) => {
  const response = await userRepository.update(req.params.id, req.body)

  if (typeof response === 'object') {
    res.json({
      data: response.modifiedCount === 1 ? 'Usuário atualizado' : 'Usuário não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

router.delete('/:id', async (req: Request, res: Response) => {
  const response = await userRepository.destroy(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response.deletedCount === 1 ? 'Usuário removido' : 'Usuário não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

export default router