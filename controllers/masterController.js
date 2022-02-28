const {
    Master
} = require('../models/models')
const ApiError = require('../error/ApiError')

class MasterController {
    async create(req, res, next) {
        try {
            const {
                name,
                masterData,
                // cityId,
                // rateId
            } = req.body;

            const master = await Master.create({
                name,
                masterData,
                // cityId,
                // rateId
            });

            return res.json(master);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }


    }

    async getAll(req, res) {
        // res.json('sd sd master')
    }

    async getOne(req, res) {

    }
}

module.exports = new MasterController()