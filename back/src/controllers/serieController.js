const Serie = require('../models/Serie')

module.exports = {
    async index(req, res) {
        const series = await Serie.find({})

        res.json(series)
    },

    async store(req, res) {
        const { name, status, bio } = req.body

        const serie = await Serie.create({
            name,
            status,
            bio
        }) 
        return res.json(serie)
    }
}