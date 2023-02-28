import 'express-async-errors'
import { Router } from 'express'
import { pingController } from './controllers'

const route = Router()

route.get('/foo', pingController.show)
route.get('/ping', pingController.ping)

export default route
