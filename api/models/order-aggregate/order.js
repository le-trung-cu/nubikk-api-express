const mongoose = require("mongoose")
const OrderItem = require("./order-item")
const Address = require("../address")

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    buyerId: String,
    orderItems: [OrderItem],
    shipToAddress: Address
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order