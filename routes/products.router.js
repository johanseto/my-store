const express = require('express')
const ProductsService = require('./../services/products.service')

const router = express.Router()
const service = new ProductsService()

router.get('/', (req, res) => {
    const products = service.find()
    res.json(products)
 
})
// app.get('/:id', (req, res) => {
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

    const product = service.findOne(id)

    res.json(product)

})

router.post('/',(req, res) => {
    const body = req.body
    const newProduct = service.create(body)
    res.status(201).json(newProduct)
})


router.put('/:id',(req, res) => {
    const{ id } = req.params
    const body = req.body
    const product = service.updatePatch(id, body)
    res.json(product)
})


router.patch('/:id',(req, res) => {
    const{ id } = req.params
    const body = req.body
    const product = service.updatePatch(id, body)
    res.json(product)
   
})



router.delete('/:id',(req, res) => {
    const{ id } = req.params
    const body = req.body
    const product = service.delete(id)
    res.json(product)
})


module.exports = router