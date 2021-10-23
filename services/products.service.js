const faker = require('faker')
class ProductsService {

    
    constructor() {
        this.products = []
        this.generate()

    }

    generate() {
        const limit = 100
        for (let index = 0; index<limit; index++){
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price()),
                image: faker.image.imageUrl(),
            })
        }
          
    }
    
    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }

        this.products.push(newProduct)
        return newProduct

    }

    async find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 5000)
        })
        
    }

    async findOne(id) {
        return this.products.find(item => item.id === id)
        
    }

    async updatePatch(id, changes) {
        const index = this.products.findIndex(item => item.id ===id)
        if (index === -1) {
            throw new Error('product not found')
        }
        const product = this.products[index]
        this.products[index] = {
            ...product,
            ...changes
        }

        return this.products[index]
    }

    async updatePut(id, changes) {
        const index = this.products.findIndex(item => item.id ===id)
        if (index === -1) {
            throw new Error('product not found')
        }
        this.products[index] = changes

        return this.products[index]
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id ===id)
        if (index === -1) {
            throw new Error('product not foun')
        }
        this.products.splice(index, 1)
         return {id, message: 'deleted'}
    }
}


module.exports = ProductsService