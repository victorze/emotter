import 'express-async-errors'
import { Router } from 'express'
import { emotController, pingController } from './controllers'

const route = Router()

route.post('/emots', emotController.store)
route.get('/ping', pingController.ping)

export default route
