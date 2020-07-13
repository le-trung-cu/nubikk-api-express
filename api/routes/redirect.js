const express = require('express')
const Product = require('../models/product')
const RedirectController = require('../controllers/RedirectController')

const redirectRouter = express.Router()


redirectRouter.get('/filterSorter/:sex/:categoryName', RedirectController.getFilterSorter)
redirectRouter.get('/filterSorter/:sex', RedirectController.getFilterSorter)

redirectRouter.get('/categories/:sex', RedirectController.getCategories)

module.exports = redirectRouter