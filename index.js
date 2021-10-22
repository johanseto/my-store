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
    res.json({
        name: 'Product1',
        price: 3000
    })

})


app.listen(port, () => {
    console.log("my port" + port)
})
