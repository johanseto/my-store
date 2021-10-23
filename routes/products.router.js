const express = require('express')
const ProductsService = require('./../services/products.service')

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {
    const products = await service.find()
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

router.get('/:id', async (req, res) => {
    //const id = req.params.id

    //Destrcuture
    const {id} = req.params

    const product = await service.findOne(id)

    res.json(product)

})

router.post('/', async (req, res) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
})


router.put('/:id', async (req, res) => {
    const{ id } = req.params
    const body = req.body
    const product = await service.updatePatch(id, body)
    res.json(product)
})


router.patch('/:id', async (req, res) => {
    try {
    const{ id } = req.params
    const body = req.body
    const product = await service.updatePatch(id, body)
    res.json(product)
    } catch (error){
        res.status(404).json({
            message: error.message
        })
    }
   
})



router.delete('/:id', async (req, res) => {
    const{ id } = req.params
    const body = req.body
    const product = await service.delete(id)
    res.json(product)
})


module.exports = router