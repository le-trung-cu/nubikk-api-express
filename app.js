
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const productRouter = require('./api/routes/products')
const seedDataRouter = require('./api/routes/seedData')
const accountRouter = require('./api/routes/account')
const basketRouter = require('./api/routes/basket')
const checkoutRouter = require('./api/routes/checkout')
const redirectRouter = require('./api/routes/redirect')


const uri = "mongodb+srv://eshop-nubikk-student:jNNi4TF3UzzBJxzP@sandbox.zhczh.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log('result.....ss.......'))
    .catch((error) => console.error(error))


// initialzations
const app = express()

// settings
app.set('port', process.env.PORT || 5001)

// middlewares
app.use(morgan('dev')) // logger
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/account', accountRouter)
app.use('/api/basket', basketRouter)
app.use('/api/checkout', checkoutRouter)
app.use('/api/redirect', redirectRouter)
app.use('/api/seed', seedDataRouter)

app.get('/', (req, res) => res.send('Hello World!5'))

// handing errors
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
})

module.exports = app