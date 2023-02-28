import { config, middleware } from './utils'
import express from 'express'
import routes from './routes'

export const app = express()

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api', middleware.cors(config.ORIGIN))
app.use('/api', routes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
