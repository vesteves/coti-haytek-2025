import { DBBase } from '../../types/base.d'

export interface UserBase {
  name: string
  email: string
  password: string
}

export type UserStore = UserBase

export type UserUpdate = Patial<UserBase>

// id - inteiro, name - texto, email - texto, password - texto
export type User = UserBase & DBBase
