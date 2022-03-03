const router = require('express').Router()

router.get('/', (req, res) => res.json('All good in here'))

// router.use('/', require('./auth.routes'))
router.use('/', require('./user.routes'))
router.use('/', require('./plans.routes'))

module.exports = router