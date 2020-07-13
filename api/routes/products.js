const express = require('express')

const ProductsController = require('../controllers/ProductsController')

const productRouter = express.Router()

productRouter.get('/:sex/:categoryName', ProductsController.getProducts)

productRouter.get('/:sex', ProductsController.getProducts)

// productRouter.get('/:sex/:productId', ProductsController.getProductById)

module.exports = productRouter;