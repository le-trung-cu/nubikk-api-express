const mongoose = require("mongoose")
const BasketItem = require("./basket-item")

const basketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    buyerId: String,
    items: [BasketItem]
})

const Basket = mongoose.model('Basket', basketSchema)

module.exports = Basket