import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../module/user/user.repository'

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
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

    // aqui é garantido de ter um usuário válido
    res.locals.user = user
  } catch (error: any) {
    res.json({
      error: error.message
    })
    return
  }

  next()
}

export default authMiddleware