import { config, middleware } from './utils'
import 'reflect-metadata'
import express from 'express'
import routes from './routes'
import { dataSource } from './db/data.source'

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

export const app = express()

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api', middleware.cors(config.ORIGIN))
app.use('/api', routes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
