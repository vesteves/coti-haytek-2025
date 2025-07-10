import { z } from "zod";

export const userStoreSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim(),
  email: z.string({
    message: 'O campo e-mail tem que ser do tipo texto'
  })
    .trim()
    .email({
      message: 'O e-mail está mal formatado'
    }),
  password: z.string().trim().min(5, {
    message: 'A senha requer no mínimo 5 caracteres'
  })
})

export const userUpdateSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser do tipo texto'
  }).trim().optional(),
  email: z.string({
    message: 'O campo e-mail tem que ser do tipo texto'
  })
    .trim()
    .email({
      message: 'O e-mail está mal formatado'
    })
    .optional(),
  password: z.string()
    .trim()
    .min(5, {
      message: 'A senha requer no mínimo 5 caracteres'
    })
    .optional()
})