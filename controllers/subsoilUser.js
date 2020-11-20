const SubsoilUser = require('../models/subsoilUser')
const Field = require('../models/field')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res) {
    try {
        const subsoilUser = await new SubsoilUser(req.body).save()

        res.status(201).json(subsoilUser)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function (req, res) {
    try {
        const subsoilUsers = await SubsoilUser.find()
        res.status(200).json(subsoilUsers)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        const fields = await Field.find({ id: req.params.id })
        if (fields.length == 0) {
            await SubsoilUser.remove({ _id: req.params.id })
            res.status(200).json({
                message: 'Subsoil User delated.',
            })
        } else {
            res.status(200).json({
                message: 'Subsoil is not empty.',
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    try {
        const vendor = await SubsoilUser.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}

// module.exports.getById = async function (req, res) {
//     try {
//         const vendor = await Vendor.findById(req.params.id)

//         res.status(200).json(vendor)
//     } catch (e) {
//         errorHandler(res, e)
//     }
// }
