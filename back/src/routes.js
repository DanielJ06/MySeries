const { Router } = require('express')

const routes = Router()

const serieController = require('./controllers/serieController')

routes.get('/', serieController.index)

routes.post('/', serieController.store)


module.exports = routes