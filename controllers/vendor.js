const Vendor = require('../models/vendor')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res) {
    try {
        const vendor = await new Vendor(req.body).save()

        res.status(201).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const vendors = await Vendor.find()
        res.status(200).json(vendors)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Vendor.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Vendor delated.',
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    try {
        const vendor = await Vendor.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function (req, res) {
    try {
        const vendor = await Vendor.findById(req.params.id)

        res.status(200).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}
