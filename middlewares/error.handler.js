//const boom = require('@hapi/boom')
function logErrors (err, req, res, next) {
    console.log('logErrors')
    console.error(err)
    next(err)
}

function errorHandler (err, req, res, next) {
    console.log('erroHandler')
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
 
}//this one no continues, cause it doenst has next.

function boomErrorHandler (err, req, res, next) {
    if(err.isBoom) {
        const { output } = err
        res.status(output.statusCode).json(output.payload)
    }

  next(err)
}//

module.exports = { logErrors, errorHandler, boomErrorHandler }