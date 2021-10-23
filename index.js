const express = require('express')
const routerApi = require('./routes') //by default search index.js


const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hello server in express')
})

app.get('/new-route', (req, res) => {
    res.send('hello i am a new route or endpoint')

})




app.listen(port, () => {
    console.log("my port" + port)
})

routerApi(app)