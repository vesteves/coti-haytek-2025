import { Router } from 'express'
import type { Request, Response } from 'express'
import clientRepository from './client.repository'
import { clientStoreSchema, clientUpdateSchema } from './client.schema'
import { schemaValidateMiddleware } from '../../middleware/schemaValidate'
import clientController from './client.controller'
export const router = Router()

router.get('/', clientController.getAll)

router.get('/:id', clientController.getById)

router.post('/', schemaValidateMiddleware(clientStoreSchema), clientController.store)

router.put('/:id', schemaValidateMiddleware(clientUpdateSchema), clientController.update)

router.delete('/:id', clientController.destroy)

export default router