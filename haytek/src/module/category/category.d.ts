import { z } from 'zod'
import { DBBase } from '../../types/base'
import { categoryStoreSchema, categoryUpdateSchema } from './category.schema'

export type CategoryBase = z.infer<typeof categoryStoreSchema>

export type CategoryStore = CategoryBase

export type CategoryUpdate = z.infer<typeof categoryUpdateSchema>

export type Category = CategoryBase & DBBase
