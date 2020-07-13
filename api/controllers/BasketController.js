const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Product = require('../models/product')
const Basket = require('../models/order-aggregate/basket')
const BasketItem = require('../models/order-aggregate/basket-item')

async function getBasket(req, res, next) {
    try {
        const buyerId = req.UserIdentity.uid;
        const basket = await Basket.findOne({ buyerId }).exec();
        return res.status(200).json(basket);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
}

async function createBasket(req, res, next) {
    const buyerId = req.UserIdentity.uid;
    const productItems = req.body.items;
    console.log(productItems)
    try {
        const basket = await Basket.findOne({ buyerId }).exec();

        const productIds = productItems.map(p => p.productId);

        const productsFromDb = await Product.find({ id: { $in: productIds } }).exec();

        const mapProductById = productsFromDb.reduce((pre, val) => pre.set(val.id, val), new Map());

        const basketItems = productItems.map(p => {
            const product = mapProductById.get(p.productId);
            return {
                _id: new mongoose.Types.ObjectId(),
                productId: p.productId,
                picture: product.picture,
                name: product.name,
                price: product.price,
                quantity: p.quantity,
                colorName: product.colorName,
                size: p.size
            }
        });

        if (basket === null) {
            basket = await new Basket({
                _id: new mongoose.Types.ObjectId(),
                buyerId,
                items: basketItems
            }).save();

        } else {

            await basket.updateOne({
                items: basketItems
            });

            basket.items = basketItems;
        }

        return res.status(201).json(basket);

    } catch (error) {
        return res.status(500).json({ error })
    }
}

async function addItemToBasket(req, res, next) {
    console.log();
    console.group('add product too basket');

    const buyerId = req.UserIdentity.uid;
    const productAdded = req.body;
    console.info("productAdded To Basket", productAdded);
    // return res.status(500).json({ error });
    try {
        let basket = await Basket.findOne({ buyerId }).exec();

        const productFromDb = await Product.findOne({ id: productAdded.productId }).exec();

        let basketItem = {
            _id: new mongoose.Types.ObjectId(),
            productId: productAdded.productId,
            picture: productFromDb.picture,
            name: productFromDb.name,
            price: productFromDb.price,
            quantity: productAdded.quantity,
            colorName: productFromDb.colorName,
            size: productAdded.size
        }

        console.log(';;;;;;;;;;', basketItem)

        if (!basket && basketItem.quantity > 0) {
            basket = await new Basket({
                _id: new mongoose.Types.ObjectId(),
                buyerId,
                items: [basketItem]
            }).save();
            console.log("haven't basket create new")
            console.log()
            console.groupEnd();
            basketItem.id = basketItem._id;
            return res.status(201).json(basketItem);
        }

        console.log("basket exists.");
        // const basketItemFromDb = await Basket.findOne({ buyerId, "items.productId": productAdded.productId, "items.size": productAdded.size },
        //     { "items.$": 1 }).exec();
        // console.log("basketItemFromDb", basketItemFromDb);

        // // const basketItemFromDb = Basket.fin

        // if (basketItemFromDb !== null) {
        //     Basket.updateOne({ buyerId, "items.productId": productAdded.productId })
        // }

        console.info("basket: ", basket)
        const existingItem = basket.items
            .find(item => item.productId == productAdded.productId && item.size == productAdded.size);

        console.log("existingItem: ", existingItem)

        if (existingItem) {
            console.log("existingItem true")
            existingItem.quantity += productAdded.quantity;

            const indexRemove = basket.items.findIndex(p => p.quantity <= 0);
            if (indexRemove !== -1) {
                console.log("removing navigate basket item");
                basket.items.splice(indexRemove, 1);
            }
            await basket.save();
            return res.status(201).json(existingItem);

        } else if (basketItem.quantity > 0) {
            basket.items.push(basketItem);
            await basket.save();
        }
        console.groupEnd();
        basketItem.id = basketItem._id;
        return res.status(201).json(basketItem);

    } catch (error) {

        console.log(error)
        console.groupEnd()
        return res.status(500).json({ error });
    }

}

async function setQuantityBasketItem(req, res, next) {
    const buyerId = req.UserIdentity.uid;
    const basketItemUpdate = req.body;

    console.info("basketItemUpdate: ", basketItemUpdate)
    try {
        if (basketItemUpdate.quantity <= 0) {
            await Basket.update({ buyerId },
                { $pull: { 'items': { _id: basketItemUpdate.basketItemId } } })
                .exec();

            return res.status(204).json();
        }

        await Basket.update({ buyerId, "items._id": basketItemUpdate.basketItemId },
            { $set: { 'items.$.quantity': basketItemUpdate.quantity } })
            .exec();

        const basketItem = getBasketItemByIdAsync(buyerIdm, basketItemUpdate.basketItemId);

        basketItem.quantity = basketItemUpdate.quantity;
        await basketItem.save();

        return res.status(200).json(basketItem);

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

async function getBasketItemByIdAsync(buyerId, basketItemId) {
    const basketItemWrap = await Basket
        .findOne({ buyerId, "items._id": basketItemId }, { "items.$": 1 })
        .exec();

    if (basketItemWrap && basketItemWrap.items.length > 0) {
        return basketItem = basketItemWrap.items[0];
    }

    return null;
}

const BasketController = {
    getBasket,
    createBasket,
    addItemToBasket,
    setQuantityBasketItem
}

module.exports = BasketController;