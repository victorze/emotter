const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const routes = require('./routes')

mongoose.set('strictQuery', false)
logger.info('Connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message)
  })

const app = express()

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api', middleware.cors(config.ORIGIN))
app.use('/api', routes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.listen(config.PORT, () => {
  logger.info(`Starting development server: http://localhost:${config.PORT}`)
})
