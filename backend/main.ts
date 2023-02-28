import { app } from './app'
import { config, logger } from './utils'

app.listen(config.PORT, () => {
  logger.info(`Starting development server: http://localhost:${config.PORT}`)
})
