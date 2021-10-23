const express = require('express')
const routerApi = require('./routes') //by default search index.js

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express()

const port = 3000

app.use(express.json())
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
app.use(logErrors) //Take care of the order they would be executed.
app.use(boomErrorHandler)
app.use(errorHandler)