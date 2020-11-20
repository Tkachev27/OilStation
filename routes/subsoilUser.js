const express = require('express')
const passport = require('passport')
const controller = require('../controllers/subsoilUser')
const router = express.Router()

router.get(
    '/',

    controller.getAll
)
router.post(
    '/',

    controller.create
)
router.delete(
    '/:id',

    controller.remove
)
router.patch(
    '/:id',

    controller.update
)

module.exports = router

// router.patch(
//     '/:id',
//     passport.authenticate('jwt', { session: false }),
//     controller.update
// )

// router.get(
//     '/:id',
//     passport.authenticate('jwt', { session: false }),
//     controller.getById
// )
