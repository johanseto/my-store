const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/', (req, res) => {
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
router.get('/filter', (req, res) => {
    res.send('i m filter')

})

router.get('/:id', (req, res) => {
    //const id = req.params.id

    //Destrcuture
    const {id} = req.params
    res.json({
        id,
        name: 'Product2',
        price: 2000
    })

})

router.post('/',(req, res) => {
    const body = req.body
    res.json({
        message: 'created',
        data: body,
    })
})


router.put('/:id',(req, res) => {
    const{ id } = req.params
    const body = req.body
    res.json({
        message: 'update',
        data: body,
        id,
    })
})


router.patch('/:id',(req, res) => {
    const{ id } = req.params
    const body = req.body
    res.json({
        message: 'update',
        data: body,
        id,
    })
})



router.delete('/:id',(req, res) => {
    const{ id } = req.params
    
    res.json({
        message: 'deleted',
        id,
    })
})


module.exports = router