import { z } from 'zod'
import { DBBase } from '../../types/base.d'
import { userStoreSchema, userUpdateSchema } from './user.schema'

export type UserBase = z.infer<userStoreSchema>

export type UserStore = UserBase

export type UserUpdate = z.infer<userUpdateSchema>

// id - objectId, name - texto, email - texto, password - texto
export type User = UserBase & DBBase
