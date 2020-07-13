
const createUserHelperAsync = require('../helpers/createUserHelper')
const Product = require('../models/product')
const Order = require('../models/order-aggregate/order')
const User = require('../models/user')
const Basket = require('../models/order-aggregate/basket')
const mongoose = require('mongoose')
const createTokenFromUserHelper = require('../helpers/createTokenFromUserHelper')

async function createOrderItemsAsync(checkoutItems = []) {
    const productIds = checkoutItems.map(item => item.productId);
    const productsFromDb = await Product.find({ id: { $in: productIds } }).exec();
    const mapProductById = productsFromDb.reduce((pre, value) => pre.set(value.id, value), new Map());

    const orderItems = checkoutItems.reduce((pre, item) => {
        const product = mapProductById.get(item.productId);
        console.log('item', item)
        console.log('product', product)
        if (product && item.quantity) {
            const orderItem = {
                _id: new mongoose.Types.ObjectId(),
                productId: product.id,
                pictureUri: product.picture,
                productName: product.name,
                size: item.size,
                colorName: item.colorName,
                units: item.quantity,
                unitPrice: product.price,
            }
            pre.push(orderItem);
        }
        return pre;
    }, new Array());

    console.log('orderItems', orderItems)

    return orderItems;
}

async function createOrderWithNewUser(req, res, next) {
    let buyerId = "";
    let user = null;
    const { shipToAddress, email, password,
        signUpOption = false, items: checkoutItems } = req.body;

    if (signUpOption) {
        const existsUser = await User.exists({ email });
        if (existsUser) {
            return res.status(409).json({
                message: "Email exists"
            });
        }

        user = await createUserHelperAsync(email, password, shipToAddress);

        /////////////////////////
        console.log('user creat', user);
        user = await user.save();
        //////////////////////////
        console.log('user db', user);

        buyerId = user._id;
    } else {
        buyerId = email;
    }

    const orderItems = await createOrderItemsAsync(checkoutItems);

    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        buyerId,
        address: shipToAddress,
        orderItems
    });

    await order.save();

    if (signUpOption) {
        const token = createTokenFromUserHelper(user);
        return res.status(201).json({
            message: "User created",
            user: {
                token,
                address: user.address,
                email: user.email
            },
        });
    } else {
        return res.status(201).json({
            message: "Order created"
        });
    }
}

async function createOrdetWithUserAuthenticated(req, res, next) {
    const buyerId = req.UserIdentity.uid;
    const basketFromDb = await Basket.findOne({ buyerId }).exec();
    const shipToAddress = req.body.shipToAddress;
    if (basketFromDb) {
        const orderItems = await createOrderItemsAsync(basketFromDb.items);
        console.log(orderItems);
        if (orderItems.length > 0) {
            const order = new Order({
                _id: new mongoose.Types.ObjectId(),
                buyerId,
                shipToAddress,
                orderItems
            });
            await basketFromDb.update({ '$set': { items: [] } }).exec();
            await order.save();

            return res.status(201).json({
                message: "Order created"
            });
        }
    }

    return res.status(400).json({
        message: "basket is empty",
        basket: basketFromDb
    });
}
async function getOrders(req, res, next) {
    const buyerId = req.UserIdentity.uid;
    const orders = await Order.find({ buyerId }).exec();

    return res.status(200).json(orders);
}

const CheckoutCotroller = {
    createOrderWithNewUser,
    createOrdetWithUserAuthenticated,
    getOrders
}

module.exports = CheckoutCotroller;