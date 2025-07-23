import { Router } from 'express'
import type { Request, Response } from 'express'
import productRepository from './product.repository'
import { productStoreSchema, productUpdateSchema } from './product.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
import productController from './product.controller'
export const router = Router()

router.get('/', productController.getAll)

router.get('/:id', productController.getById)

router.post('/', schemaValidateMiddleware(productStoreSchema), productController.store)

router.put('/:id', schemaValidateMiddleware(productUpdateSchema), productController.update)

router.delete('/:id', productController.destroy)

export default router