const roomsRouter = require('./rooms')
const siteRouter = require('./site')
function route(app) {

    app.use('/rooms',roomsRouter)
    
    app.use('/',siteRouter)
    
    
}

module.exports = route