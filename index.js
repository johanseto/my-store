const express = require('express')
const cors = require('cors')
const routerApi = require('./routes') //by default search index.js

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express()

const port = process.env.PORT || 3000 //iF IS DEFINED IN ENV THE PORT.
const host = '0.0.0.0'
app.use(express.json())
const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://127.0.0.1:5500']//live server from vscode
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin){
            callback(null, true)
        } else {
            callback(new Error('not allowed'))
        }
    }
}
//app.use(cors())//accept whatelse origin
app.use(cors(options))//accept whatelse origin
app.get('/', (req, res) => {
    res.send('hello server in express')
})

app.get('/new-route', (req, res) => {
    res.send('hello i am a new route or endpoint')

})




app.listen(port, host, () => {
    console.log("my port" + port)
    
    console.log("my host" + host)
})

routerApi(app)

app.use(logErrors) //Take care of the order they would be executed.
app.use(boomErrorHandler)
app.use(errorHandler)