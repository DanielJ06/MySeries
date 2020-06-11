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
    },

    async delete(req, res) {
        const { id } = req.params
        const serie = await Serie.findOne({_id: id})
        
        if(!serie) {
            return res.status(401).json({error: "Id not found"})
        }
        
        await Serie.deleteOne(serie)

        return res.json({Response: "Serie has been successfully deleted"})
    },

    async edit(req, res) {
        const { id } = req.params
        const { name, status, bio } = req.body

        const serie = await Serie.findByIdAndUpdate({_id: id}, {
            name,
            status,
            bio,
        })

        return res.json(serie)
    }
}