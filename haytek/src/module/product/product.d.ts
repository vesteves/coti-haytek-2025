import { z } from 'zod'
import { DBBase } from '../../types/base'
import { productStoreSchema, productUpdateSchema } from './product.schema'

export type ProductBase = z.infer<productStoreSchema>

export type ProductStore = ProductBase

export type ProductUpdate = z.infer<productUpdateSchema>

export type Product = ProductBase & DBBase
