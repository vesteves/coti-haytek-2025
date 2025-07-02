import { Router } from 'express'
import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userRepository from '../user/user.repository'

export const router = Router()

router.post('/login', async (req: Request, res: Response) => {
    // TODO verificar se veio e-mail na requisicao
    if (!req.body.email) {
        res.status(422).json({
            error: "E-mail é obrigatório"
        })
        return
    }
    // TODO verificar se veio senha na requisicao
    if (!req.body.password) {
        res.status(422).json({
            error: "Senha é obrigatória"
        })
        return
    }
    // TODO verificar se o e-mail existe na base
    const user = await userRepository.getByEmail(req.body.email)

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
    // TODO verificar a senha
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password)
    if (!verifyPassword) {
        res.status(401).json({
            error: "Usuário e senha não conferem"
        })
        return
    }

    const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET || 'secret');

    res.json(token)
})

export default router