import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const schemaValidateMiddleware = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = schema.parse(req.body)

    res.locals.validated = validated
    next()
  } catch (error: any) {
    res.status(422).json({
      error: error.errors
    })
    return
  }
}