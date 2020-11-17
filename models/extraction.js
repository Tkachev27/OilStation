const mongoose = require('mongoose')
const Schema = mongoose.Schema

const extractionSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
    },
    id: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('extraction', extractionSchema)
