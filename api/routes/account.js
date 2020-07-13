const express = require('express')

const AccountController = require('../controllers/AccountController')

const accountRouter = express.Router()

accountRouter.post('/signup', AccountController.signup)

accountRouter.post('/signin', AccountController.signin)

module.exports = accountRouter