const mongoose = require("mongoose")

const OrderItem = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: Number,
    pictureUri: String,
    productName: String,
    size: String,
    colorName: String,
    units: Number,
    unitPrice: Number,
})
// Duplicate the ID field.
OrderItem.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
OrderItem.set('toJSON', {
    virtuals: true
});
OrderItem.set('toObject', {
    virtuals: true
})

module.exports = OrderItem