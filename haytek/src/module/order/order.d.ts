import { z } from 'zod'
import { DBBase } from '../../types/base'
import { orderStoreSchema, orderUpdateSchema } from './order.schema'

export type OrderBase = z.infer<orderStoreSchema>

export type OrderStore = OrderBase

export type OrderUpdate = z.infer<orderUpdateSchema>

export type Order = OrderBase & DBBase
