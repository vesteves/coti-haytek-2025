import type { User, UserStore } from "./user.d";

export const users:User[] = []

const getAll = () => {
  return users
}

const store = (param: UserStore) => {
  users.push({
    name: param.name,
    email: param.email,
    password: param.password,
    id: users.length + 1,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  })
  return true
}

export default {
  getAll,
  store
}