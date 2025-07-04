import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import userController from './module/user/user.controller'
import authController from './module/auth/auth.controller'
import authMiddleware from './middleware/auth'
const app = express()

app.use(express.json())
app.use('/user', authMiddleware, userController)
app.use('/auth', authController)

app.get('/health', (req: Request, res: Response) => {
  res.json({
    msg: 'ok'
  })
})

app.listen(8000, () => {
  // 'mongodb://root:example@localhost:27017/typescryptdb'
  // mongodb:// - Protocolo
  // root - usuario
  // example - senha
  // localhost - dominio
  // 27017 - porta
  // typescryptdb - nome do banco
  mongoose.connect(process.env.DB_STRING as string || '')
  console.log('Haytek ON')
})
