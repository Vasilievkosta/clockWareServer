const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
const generateJwt = (id, email, role) => {
	return jwt.sign( { id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' } )
}


// вместо поля - password задействуем поле - name

class UserController {
    async registration(req, res, next) {
        const { email, name, role } = req.body;
        if (!email || !name) {
            return next(ApiError.badRequest('Некорректынй email или пароль'))
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hachPassword = await bcrypt.hash(name, 5);
        const user = await User.create({ email, role, name: hachPassword });

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({
            token
        })
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {
            id
        } = req.query;
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id);
    }
}

module.exports = new UserController()