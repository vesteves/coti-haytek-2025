import { z } from "zod";

export const orderStoreSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim(),
  price: z.number({
    message: 'O campo preço tem que ser do tipo número'
  }).int({
    message: 'O campo preço tem que ser do tipo inteiro'
  })
})

export const orderUpdateSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim().optional(),
  price: z.number({
    message: 'O campo preço tem que ser do tipo número'
  }).int({
    message: 'O campo preço tem que ser do tipo inteiro'
  }).optional()
})