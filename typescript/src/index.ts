import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import userController from './module/user/user.controller'
const app = express()

app.use(express.json())
app.use('/user', userController)

app.get('/health', (req: Request, res: Response) => {
  res.json({
    msg: 'ok'
  })
})

app.listen(8000, async () => {
  await mongoose.connect('mongodb://root:example@localhost:27017/teste?authSource=admin');
  const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
  })
  const users = mongoose.model('users', userSchema);

  console.log(await users.find())

  console.log('Typescript ON')
})
