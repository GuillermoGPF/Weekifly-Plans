const router = require('express').Router()

router.use('/', require('./auth.routes'))
router.use('/', require('./user.routes'))
router.use('/', require('./plans.routes'))

module.exports = router