const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    picture: String,
    lable: String,
    name: String,
    price: Number,
    sizes: [{ name: String, status: Boolean }],
    sex: String,
    colorId: Number,
    colorName: String,
    materialId: Number,
    materialName: String,
    categoryId: Number,
    categoryName: String,
    modelId: Number,
    modelName: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product