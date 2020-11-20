const Field = require('../models/field')
const Well = require('../models/well')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res) {
    try {
        const field = await new Field(req.body).save()

        res.status(201).json(field)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const fields = await Field.find({ id: req.params.id })
        res.status(200).json(fields)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        const wells = await Well.find({ id: req.params.id })
        if (wells.length == 0) {
            await Field.remove({ _id: req.params.id })
            res.status(200).json({
                message: 'Field delated.',
            })
        } else {
            res.status(200).json({
                message: 'Field is not empty.',
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function (req, res) {
    try {
        const vendor = await Field.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}
