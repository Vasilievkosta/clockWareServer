const {
    Rate
} = require('../models/models')
const ApiError = require('../error/ApiError')


class RatingController {
    async create(req, res) {
        const {
            name
        } = req.body
        const rate = await Rate.create({
            name
        })
        return res.json(rate);
    }

    async getAll(req, res) {
        const rates = await Rate.findAll()
        return res.json(rates);
    }
}

module.exports = new RatingController()