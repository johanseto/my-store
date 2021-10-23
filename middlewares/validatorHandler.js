const boom = require('@hapi/boom')
function validatorHandler (schema, property) {
    return (req, res, next) => {
        const data = req[property]
        const {error} = schema.validate(data, {abortEarly: false})
        //req.body, req.params,req.body..dynamic property.
        
        if (error) {
            next(boom.badRequest(error))
           
        }
        next()
    }
 
}//dyamic creation of midlewares usign closures in Javascript.
module.exports = validatorHandler