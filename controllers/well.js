const Well = require('../models/well')
const Extraction = require('../models/extraction')
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
        const wells = await Well.find({ id: req.params.id })
        res.status(200).json(wells)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        const extractions = await Extraction.find({ id: req.params.id })

        if (extractions.length == 0) {
            await Well.remove({ _id: req.params.id })
            res.status(200).json({
                message: 'Well delated.',
            })
        } else {
            res.status(200).json({
                message: 'Well is not empty.',
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function (req, res) {
    try {
        const vendor = await Well.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}
