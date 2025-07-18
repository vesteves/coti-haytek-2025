import { Router } from 'express'
import type { Request, Response } from 'express'
import categoryRepository from './category.repository'
import { categoryStoreSchema, categoryUpdateSchema } from './category.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const response = await categoryRepository.getAll()

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
  const response = await categoryRepository.getById(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response !== null ? response : 'Categoria não encontrada'
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

router.post('/', schemaValidateMiddleware(categoryStoreSchema), async (req: Request, res: Response) => {
  const response = await categoryRepository.store(res.locals.validated)

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

router.put('/:id', schemaValidateMiddleware(categoryUpdateSchema), async (req: Request, res: Response) => {
  const response = await categoryRepository.update(req.params.id, res.locals.validated)

  if (typeof response === 'object') {
    res.json({
      data: response.modifiedCount === 1 ? 'Categoria atualizada' : 'Categoria não encontrada'
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

router.delete('/:id', async (req: Request, res: Response) => {
  const response = await categoryRepository.destroy(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response.deletedCount === 1 ? 'Categoria removida' : 'Categoria não encontrada'
    })
    return
  }

  res.status(400).json({
    error: response
  })
})

export default router