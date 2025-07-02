import { Router } from 'express'
import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from './user.repository'
export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  // TODO só pode chegar requisição do usuário autenticado
  if (!req.headers.authorization) {
    res.json({
      error: 'Sem autorização'
    })
    return
  }
  try {
    const _id = jwt.verify(req.headers.authorization, process.env.JWT_SECRET || 'secret')
    const user = await userRepository.getById(_id as string)

    if (!user) {
        res.status(404).json({
            error: "Usuário não encontrado"
        })
        return
    }

    if (typeof user === 'string') {
        res.status(500).json({
            error: user
        })
        return
    }
  } catch (error:any) {
    res.json({
      error: error.message
    })
    return
  }
  
  const response = await userRepository.getAll()
  
  if (typeof response === 'object'){
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
  // TODO só pode chegar requisição do usuário autenticado
  if (!req.headers.authorization) {
    res.json({
      error: 'Sem autorização'
    })
    return
  }
  try {
    const _id = jwt.verify(req.headers.authorization, process.env.JWT_SECRET || 'secret')
    const user = await userRepository.getById(_id as string)

    if (!user) {
        res.status(404).json({
            error: "Usuário não encontrado"
        })
        return
    }

    if (typeof user === 'string') {
        res.status(500).json({
            error: user
        })
        return
    }
  } catch (error:any) {
    res.json({
      error: error.message
    })
    return
  }
  const response = await userRepository.getById(req.params.id)

  if (typeof response === 'object'){
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
  const response = await userRepository.store(req.body)

  if (typeof response === 'object'){
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

  if (typeof response === 'object'){
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

  if (typeof response === 'object'){
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