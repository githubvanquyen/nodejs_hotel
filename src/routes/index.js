const roomsRouter = require('./rooms')
const siteRouter = require('./site')
const accountRouter = require('./account')
function route(app) {

    app.use('/rooms',roomsRouter)
    app.use('/account',accountRouter)
    app.use('/',siteRouter)
    
}

module.exports = route