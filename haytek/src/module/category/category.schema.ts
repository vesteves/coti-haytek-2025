import { z } from "zod";

export const categoryStoreSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim(),
  position: z.number({
    message: 'O campo posição tem que ser do tipo número'
  }).int({
    message: 'O campo posição tem que ser do tipo inteiro'
  })
})

export const categoryUpdateSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim().optional(),
  position: z.number({
    message: 'O campo posição tem que ser do tipo número'
  }).int({
    message: 'O campo posição tem que ser do tipo inteiro'
  }).optional()
})