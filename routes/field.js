const express = require('express')
const passport = require('passport')
const controller = require('../controllers/field')
const router = express.Router()

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.getAll
)
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.create
)
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.remove
)

module.exports = router