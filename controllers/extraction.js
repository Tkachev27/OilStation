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
        let reqParams = req.params.id
        reqParams = reqParams.split('+')

        reqExtractions = []

        const extractions = await Extraction.find({ id: reqParams[0] })
        if (reqParams.length == 3) {
            let startdate = new Date(reqParams[1])
            let enddate = new Date(reqParams[2])

            for (let ext of extractions) {
                let date = new Date(ext.date)
                // console.log(startdate < date, date < enddate)
                if (startdate < date && date < enddate) {
                    reqExtractions.push(ext)
                }
            }
        } else {
            reqExtractions = extractions
        }
        res.status(200).json(reqExtractions)
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
module.exports.update = async function (req, res) {
    try {
        const vendor = await Extraction.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(vendor)
    } catch (e) {
        errorHandler(res, e)
    }
}
