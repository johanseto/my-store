const express = require('express')
const productRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')
function routerApi(app) {
    const router = express.router()
    app.use('/products', productRouter)
    app.use('/users', usersRouter)
    app.use('/categories', categoriesRouter)
}

module.exports  = routerApi