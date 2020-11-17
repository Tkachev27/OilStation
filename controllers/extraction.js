const Extraction = require('../models/extraction')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res) {
    try {
        const extraction = await new Extraction(req.body).save()

        res.status(201).json(extraction)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const extractions = await Extraction.find()
        res.status(200).json(extractions)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Extraction.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Extraction delated.',
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
