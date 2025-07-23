import { Router } from 'express'
import type { Request, Response } from 'express'
import stockRepository from './stock.repository'
import { stockStoreSchema, stockUpdateSchema } from './stock.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
import stockController from './stock.controller'
export const router = Router()

router.get('/', stockController.getAll)

router.get('/:id', stockController.getById)

router.post('/', schemaValidateMiddleware(stockStoreSchema), stockController.store)

router.put('/:id', schemaValidateMiddleware(stockUpdateSchema), stockController.update)

router.delete('/:id', stockController.destroy)

export default router