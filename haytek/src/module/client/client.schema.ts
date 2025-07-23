import { z } from "zod";

export const clientStoreSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim(),
  cnpj: z.string({
    message: 'O campo cnpj tem que ser do tipo texto'
  }).trim(),
  address: z.string({
    message: 'O campo endereço tem que ser do tipo texto'
  }).trim(),
  brand: z.string({
    message: 'O campo cadeia tem que ser do tipo número'
  }).trim()
})

export const clientUpdateSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim().optional(),
  cnpj: z.string({
    message: 'O campo cnpj tem que ser do tipo texto'
  }).trim().optional(),
  address: z.string({
    message: 'O campo endereço tem que ser do tipo texto'
  }).trim().optional(),
  brand: z.string({
    message: 'O campo cadeia tem que ser do tipo número'
  }).trim().optional()
})