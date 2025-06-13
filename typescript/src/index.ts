import express, { Request, Response } from 'express'
import userController from './module/user/user.controller'
const app = express()

app.use(express.json())
app.use(userController)

app.get('/health', (req: Request, res: Response) => {
  res.json({
    msg: 'ok'
  })
})

app.listen(8000, () => {
  console.log('Typescript ON')
})
