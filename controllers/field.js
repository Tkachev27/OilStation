const Field = require('../models/field')
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
        await Field.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Field delated.',
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
