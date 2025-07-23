import type { Request, Response } from 'express'
import productRepository from './product.repository'

const getAll = async (req: Request, res: Response) => {
  const response = await productRepository.getAll()

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
  const response = await productRepository.getById(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response !== null ? response : 'Produto não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const store = async (req: Request, res: Response) => {
  const response = await productRepository.store(res.locals.validated)

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
  const response = await productRepository.update(req.params.id, res.locals.validated)

  if (typeof response === 'object') {
    res.json({
      data: response.modifiedCount === 1 ? 'Produto atualizado' : 'Produto não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const destroy = async (req: Request, res: Response) => {
  const response = await productRepository.destroy(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response.deletedCount === 1 ? 'Produto removido' : 'Produto não encontrado'
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