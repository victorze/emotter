const route = require('express').Router()
const pingController = require('./controllers/ping.controller')

route.get('/ping', pingController.show)

module.exports = route
