import type { Request, Response } from 'express'
import stockRepository from './stock.repository'

const getAll = async (req: Request, res: Response) => {
  const response = await stockRepository.getAll()

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
  const response = await stockRepository.getById(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response !== null ? response : 'Estoque não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const store = async (req: Request, res: Response) => {
  const response = await stockRepository.store(res.locals.validated)

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
  const response = await stockRepository.update(req.params.id, res.locals.validated)

  if (typeof response === 'object') {
    res.json({
      data: response.modifiedCount === 1 ? 'Estoque atualizado' : 'Estoque não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const destroy = async (req: Request, res: Response) => {
  const response = await stockRepository.destroy(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response.deletedCount === 1 ? 'Estoque removido' : 'Estoque não encontrado'
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