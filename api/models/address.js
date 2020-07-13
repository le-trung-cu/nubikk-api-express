const mongoose = require('mongoose')

const Address = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: false },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
})

module.exports = Address