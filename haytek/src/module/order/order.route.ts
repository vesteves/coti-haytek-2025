import { Router } from 'express'
import type { Request, Response } from 'express'
import orderRepository from './order.repository'
import { orderStoreSchema, orderUpdateSchema } from './order.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
import orderController from './order.controller'
export const router = Router()

router.get('/', orderController.getAll)

router.get('/:id', orderController.getById)

router.post('/', schemaValidateMiddleware(orderStoreSchema), orderController.store)

router.put('/:id', schemaValidateMiddleware(orderUpdateSchema), orderController.update)

router.delete('/:id', orderController.destroy)

export default router