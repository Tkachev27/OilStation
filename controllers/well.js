const Well = require('../models/well')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res) {
    try {
        const well = await new Well(req.body).save()

        res.status(201).json(well)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const wells = await Well.find()
        res.status(200).json(wells)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Well.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Well delated.',
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
