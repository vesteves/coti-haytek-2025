import { z } from "zod";

export const userStoreSchema = z.object({
  name: z.string({
    message: 'O campo nome tem que ser to tipo texto'
  }),
  email: z.string({
    message: 'O campo e-mail tem que ser to tipo texto'
  }).email({
    message: 'O e-mail está mal formatado'
  }),
  password: z.string().min(5, {
    message: 'A senha requer no mínimo 5 caracteres'
  })
})
