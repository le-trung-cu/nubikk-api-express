const Product = require('../models/product')

const getProducts = async (req, res, next) => {

    const query = { sex: req.params.sex };
    if (req.params.categoryName) {
        query.categoryName = req.params.categoryName
    }

    const { colorIds, materialIds, categoryIds, priceRange, modelIds, sizes } = req.query;

    try {
        if (colorIds) {
            query.colorId = { $in: colorIds.split(',').map(id => parseInt(id.trim())) };
        }
        if (materialIds) {
            query.materialId = { $in: materialIds.split(',').map(id => parseInt(id.trim())) };
        }
        if (categoryIds) {
            query.categoryId = { $in: categoryIds.split(',').map(id => parseInt(id.trim())) };
        }

        if (modelIds) {
            query.modelId = { $in: modelIds.split(',').map(id => parseInt(id.trim())) };
        }
        if (priceRange) {
            const pricesArr = priceRange.split(':').map(p => parseInt(p.trim()))
            query.price = { $gte: pricesArr[0], $lte: pricesArr[1] };
        }
        if (sizes) {
            const sizesArr = sizes.split(',').map(p => parseInt(p.trim()))

            query.sizes = { $elemMatch: { "name": { $in: sizesArr }, "status": true } }
            // query[`sizes.${size}`] = { '$exists': true, $eq: true };
        }

        console.log('query products: ', query);

        const products = await Product.find(query)
            .select("-sizes._id")
            // .limit(30)
            .exec();

        return res.status(200).json(products);

    } catch (error) {
        console.log(err);
        return res.status(500).json({
            error: err
        });
    }
}

const getProductById = async (req, res, next) => {
    const product = await Product.findOne({ id: req.params.productId }).exec();
    res.status(200).json(product);
}

const ProductsController = {
    getProducts,
    getProductById
}

module.exports = ProductsController;