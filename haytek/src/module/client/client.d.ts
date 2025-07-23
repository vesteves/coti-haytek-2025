import { z } from 'zod'
import { DBBase } from '../../types/base'
import { clientStoreSchema, clientUpdateSchema } from './client.schema'

export type ClientBase = z.infer<clientStoreSchema>

export type ClientStore = ClientBase

export type ClientUpdate = z.infer<clientUpdateSchema>

export type Client = ClientBase & DBBase
