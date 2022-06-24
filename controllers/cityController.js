const {
    City
} = require('../models/models')
const ApiError = require('../error/ApiError')

class CityController {
    async create(req, res) {
        const {
            name
        } = req.body;
        const city = await City.create({
            name
        });
        res.json(city);
    }

    async getAll(req, res) {
        const cities = await City.findAll()

        res.json(cities);
    }

    async getOneCity(req, res) {
        let id = req.params.id;
        const cities = await City.findAll()
        let city = cities.find(el => el.id === +id)

        res.json(city);
    }
}

module.exports = new CityController()