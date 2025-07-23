import type { Request, Response } from 'express'
import clientRepository from './client.repository'

const getAll = async (req: Request, res: Response) => {
  const response = await clientRepository.getAll()

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
  const response = await clientRepository.getById(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response !== null ? response : 'Cliente não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const store = async (req: Request, res: Response) => {
  const response = await clientRepository.store(res.locals.validated)

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
  const response = await clientRepository.update(req.params.id, res.locals.validated)

  if (typeof response === 'object') {
    res.json({
      data: response.modifiedCount === 1 ? 'Cliente atualizado' : 'Cliente não encontrado'
    })
    return
  }

  res.status(400).json({
    error: response
  })
}

const destroy = async (req: Request, res: Response) => {
  const response = await clientRepository.destroy(req.params.id)

  if (typeof response === 'object') {
    res.json({
      data: response.deletedCount === 1 ? 'Cliente removido' : 'Cliente não encontrado'
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