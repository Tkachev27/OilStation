const express = require('express')
const passport = require('passport')
const controller = require('../controllers/extraction')
const router = express.Router()

router.get(
    '/:id',

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
