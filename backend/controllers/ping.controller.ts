import { Request, Response } from 'express'

export const show = async (_req: Request, res: Response) => {
  const data = await getUserFromDb()

  res.json({ data })
}

export const ping = (_req: Request, res: Response) => {
  res.json({ value: 'pong' })
}

export const getUserFromDb = () => {
  return new Promise(() => {
    throw new Error('This is an error')
  })
}
