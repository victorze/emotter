import * as dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT
export const ORIGIN = process.env.ORIGIN

export const DB = {
  CONNECTION: process.env.DB_CONNECTION,
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  DATABASE: process.env.DB_DATABASE,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
} as const
