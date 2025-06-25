import type { User, UserStore } from "./user.d";
import { userModel } from './user.model'

const getAll = (): Promise<User[]> => {
  // select * from users
  return userModel.find()
}

const getById = (_id: string): Promise<User | null> => {
  return userModel.findById(_id)
}

const store = (param: UserStore): boolean => {
  userModel.create(param)
  return true
}

export default {
  getAll,
  getById,
  store,
}