import type { Request, Response } from 'express'
import orderRepository from './order.repository'

const getAll = async (req: Request, res: Response) => {
  const response = await orderRepository.getAll()

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
  const response = await orderRepository.getById(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response !== null ? response : 'Pedido não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const store = async (req: Request, res: Response) => {
  const response = await orderRepository.store(res.locals.validated)

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
  const response = await orderRepository.update(req.params.id, res.locals.validated)

  if (typeof response === 'object') {
    res.json({
      data: response.modifiedCount === 1 ? 'Pedido atualizado' : 'Pedido não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const destroy = async (req: Request, res: Response) => {
  const response = await orderRepository.destroy(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response.deletedCount === 1 ? 'Pedido removido' : 'Pedido não encontrado'
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