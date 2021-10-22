const express = require('express')
const faker = require('faker')


const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hello server in express')
})

app.get('/new-route', (req, res) => {
    res.send('hello i am a new route or endpoint')

})

app.get('/products', (req, res) => {
    const products = []
    const {size} = req.query
    const limit = size || 10
    for (let index = 0; index<limit; index++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.productName()),
            image: faker.image.imageUrl(),
        })
    }
    res.json(products)
})




// app.get('/products/:id', (req, res) => {
//     //const id = req.params.id

//     //Destrcuture
//     const {id} = req.params
//     res.json({
//         id,
//         name: 'Product2',
//         price: 2000
//     })

// })

//filter its get taken as an id. Specfici endpoints has to go beforer dinamic endpoints.
app.get('/products/filter', (req, res) => {
    res.send('i m filter')

})

app.get('/products/:id', (req, res) => {
    //const id = req.params.id

    //Destrcuture
    const {id} = req.params
    res.json({
        id,
        name: 'Product2',
        price: 2000
    })

})

app.get('/users', (req, res) => {
    const {limit, offset} = req.query

    if(limit && offset){
        res.json({
            limit,
            offset
        })

    } else {
        res.send('No params')
    }

})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    //const id = req.params.id

    //JS Destructure
    const {categoryId, productId} = req.params
    res.json({
        categoryId,
        productId,
        name: 'Product2',
        price: 2000
    })

})


app.listen(port, () => {
    console.log("my port" + port)
})
