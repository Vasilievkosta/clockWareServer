const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const masterRouter = require('./masterRouter')
const cityRouter = require('./cityRouter')
const ratingRouter = require('./ratingRouter')


router.use('/user', userRouter)
router.use('/master', masterRouter)
router.use('/city', cityRouter)
router.use('/rating', ratingRouter)


module.exports = router