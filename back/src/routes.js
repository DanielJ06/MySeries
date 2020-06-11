const { Router } = require('express')

const routes = Router()

const serieController = require('./controllers/serieController')

routes.get('/serie', serieController.index)
routes.post('/serie', serieController.store)
routes.delete('/serie/:id', serieController.delete)
routes.put('/serie/:id', serieController.edit)


module.exports = routes