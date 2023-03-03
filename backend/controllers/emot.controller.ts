import { Request, Response } from 'express'
import { Emot } from '../entities/emot.entity'

export const store = async (req: Request, res: Response) => {
  const emot = new Emot()
  emot.content = req.body.content
  await emot.save()
  res.status(201).json({ emot })
}
