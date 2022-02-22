const Router = require('express');
const router = new Router();
const masterController = require('../controllers/masterController');

router.post('/', masterController.create)
router.get('/', masterController.getAll)
router.get('/:id', masterController.getOne)

module.exports = router