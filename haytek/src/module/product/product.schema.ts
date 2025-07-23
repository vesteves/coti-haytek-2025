import { z } from "zod";

export const productStoreSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim(),
  price: z.number({
    message: 'O campo preço tem que ser do tipo número'
  }).int({
    message: 'O campo preço tem que ser do tipo inteiro'
  }),
  categoryId: z.string({
    message: 'O campo categoria tem que ser do tipo texto'
  }).trim(),
})

export const productUpdateSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim().optional(),
  price: z.number({
    message: 'O campo preço tem que ser do tipo número'
  }).int({
    message: 'O campo preço tem que ser do tipo inteiro'
  }).optional(),
  categoryId: z.string({
    message: 'O campo categoria tem que ser do tipo texto'
  }).trim().optional(),
})