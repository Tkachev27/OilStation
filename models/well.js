const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wellSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    depth: {
        type: Number,
    },
    drillingDate: {
        type: String,
        required: true,
    },
    fieldId: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('well', wellSchema)
