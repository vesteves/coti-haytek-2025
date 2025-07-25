import type { Request, Response } from 'express'
import categoryRepository from './category.repository'

const getAll = async (req: Request, res: Response) => {
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
}

const getById = async (req: Request, res: Response) => {
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
}

const store = async (req: Request, res: Response) => {
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
}

const update = async (req: Request, res: Response) => {
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
}

const destroy = async (req: Request, res: Response) => {
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
}

export default {
  getAll,
  getById,
  update,
  destroy,
  store
}