import { Router } from 'express'
import type { Request, Response } from 'express'
import categoryRepository from './category.repository'
import { categoryStoreSchema, categoryUpdateSchema } from './category.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
import categoryController from './category.controller'
export const router = Router()

router.get('/', categoryController.getAll)

router.get('/:id', categoryController.getById)

router.post('/', schemaValidateMiddleware(categoryStoreSchema), categoryController.store)

router.put('/:id', schemaValidateMiddleware(categoryUpdateSchema), categoryController.update)

router.delete('/:id', categoryController.destroy)

export default router