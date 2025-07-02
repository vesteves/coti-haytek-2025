import bcrypt from 'bcrypt'
import type { User, UserStore, UserUpdate } from "./user.d";
import { userModel } from './user.model'

const getAll = (): Promise<User[] | string> => {
  try {
    return userModel.find().lean()
  } catch (error: any) {
    return error.message
  }
  
}

const getById = (_id: string): Promise<User | null | string> => {
  try {
    return userModel.findById(_id).lean()
  } catch (error:any) {
    return error.message
  }
}

const getByEmail = (email: string): Promise<User | null | string> => {
  try {
    return userModel.findOne({ email }).lean()
  } catch (error:any) {
    return error.message
  }
}

const store = async (param: UserStore): Promise<User | string> => {
  param.password = bcrypt.hashSync(param.password, 10)

  try {
    return await userModel.create(param)
  } catch (error: any) {
    return error.message
  }
}

const update = async (_id: string, param: UserUpdate): Promise<any | string> => {
  try {
    return await userModel.updateOne({
      _id
    }, {
      $set: param
    })
  } catch (error:any) {
    return error.message
  }
}

const destroy = async (_id: string): Promise<any | string> => {
  try {
    return await userModel.deleteOne({ _id })
  } catch (error: any) {
    return error.message
  }
}

export default {
  getAll,
  getByEmail,
  getById,
  store,
  update,
  destroy,
}