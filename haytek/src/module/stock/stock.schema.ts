import { z } from "zod";

export const stockStoreSchema = z.object({
  quantity: z.number({
    message: 'O campo quantidade tem que ser do tipo número'
  }).int({
    message: 'O campo quantidade tem que ser do tipo inteiro'
  }),
  inventory: z.string({
    message: 'O armazem nome tem que ser do tipo texto'
  }).trim(),
})

export const stockUpdateSchema = z.object({
  quantity: z.number({
    message: 'O campo quantidade tem que ser do tipo número'
  }).int({
    message: 'O campo quantidade tem que ser do tipo inteiro'
  }).optional(),
  inventory: z.string({
    message: 'O armazem nome tem que ser do tipo texto'
  }).trim().optional(),
})