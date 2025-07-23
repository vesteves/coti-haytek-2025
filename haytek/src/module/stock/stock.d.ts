import { z } from 'zod'
import { DBBase } from '../../types/base'
import { stockStoreSchema, stockUpdateSchema } from './stock.schema'

export type StockBase = z.infer<stockStoreSchema>

export type StockStore = StockBase

export type StockUpdate = z.infer<stockUpdateSchema>

export type Stock = StockBase & DBBase
