import { Router } from 'express'
import type { Request, Response } from 'express'
import userRepository from './user.repository'
import { userStoreSchema, userUpdateSchema } from './user.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
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

router.post('/', schemaValidateMiddleware(userStoreSchema), async (req: Request, res: Response) => {
  const response = await userRepository.store(res.locals.validated)

  if (typeof response === 'object') {
    res.json({
      data: response
    })
    return
  }

  res.status(400).json({
    error: response
  })

  res.json({
    msg: 'ok'
  })
})

router.put('/:id', schemaValidateMiddleware(userUpdateSchema), async (req: Request, res: Response) => {
  const response = await userRepository.update(req.params.id, res.locals.validated)

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