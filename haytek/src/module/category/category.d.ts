import { z } from 'zod'
import { DBBase } from '../../types/base'
import { categoryStoreSchema, categoryUpdateSchema } from './category.schema'

export type CategoryBase = z.infer<categoryStoreSchema>

export type CategoryStore = CategoryBase

export type CategoryUpdate = z.infer<categoryUpdateSchema>

export type Category = CategoryBase & DBBase
