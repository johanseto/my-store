const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hello server in express')
})

app.get('/new-route', (req, res) => {
    res.send('hello i am a new route or endpoint')

})
app.get('/products', (req, res) => {
    res.json([
        {
        name: 'Product1',
        price: 3000
    }, {
        name: 'Product2',
        price: 2000
    }])

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
