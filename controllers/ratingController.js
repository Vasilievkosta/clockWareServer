const {
    Rate
} = require('../models/models')
const ApiError = require('../error/ApiError')


class RatingController {
    async create(req, res) {
        const {
            rate
        } = req.body
        const rateName = await Rate.create({
            rate
        })
        return res.json(rateName);
    }

    async getAll(req, res) {
        const rates = await Rate.findAll()
        return res.json(rates);
    }
}

module.exports = new RatingController()