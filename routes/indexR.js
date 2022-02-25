const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const masterRouter = require('./masterRouter')
const cityRouter = require('./cityRouter')
const ratingRouter = require('./ratingRouter')
const sizeRouter = require('./sizeRouter')


router.use('/user', userRouter)
router.use('/master', masterRouter)
router.use('/city', cityRouter)
router.use('/rating', ratingRouter)
router.use('/size', sizeRouter)


module.exports = router