const express = require('express')
const AuthHandler = require('../middleware/auth-handler')
const CheckoutCotroller = require('../controllers/CheckoutController');

const checkoutRouter = express.Router();

checkoutRouter.post('/cart', CheckoutCotroller.createOrderWithNewUser)

checkoutRouter.post('/basket', AuthHandler, CheckoutCotroller.createOrdetWithUserAuthenticated)

checkoutRouter.get('/orders', AuthHandler, CheckoutCotroller.getOrders);

module.exports = checkoutRouter;