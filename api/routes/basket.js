const express = require('express')
const AuthHandler = require('../middleware/auth-handler')
const BasketController = require('../controllers/BasketController')



const basketRouter = express.Router()

basketRouter.get('/', AuthHandler, BasketController.getBasket)

// create basket
basketRouter.post('/', AuthHandler, BasketController.createBasket)

// add item to basket
basketRouter.post('/addItem', AuthHandler, BasketController.addItemToBasket)

// set quantity to basket item
basketRouter.put('/', AuthHandler, BasketController.setQuantityBasketItem)

module.exports = basketRouter