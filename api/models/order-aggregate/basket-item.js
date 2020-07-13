const mongoose = require("mongoose")


const BasketItem = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: Number,
    picture: String,
    name: String,
    size: String,
    colorName: String,
    quantity: Number,
    price: Number,
})
// Duplicate the ID field.
BasketItem.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
BasketItem.set('toJSON', {
    virtuals: true
});
BasketItem.set('toObject', {
    virtuals: true
})

module.exports = BasketItem