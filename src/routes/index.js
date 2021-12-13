const roomsRouter = require('./rooms')
const siteRouter = require('./site')
const accountRouter = require('./account')
const adminRouter = require('./admin')
function route(app) {

    app.use('/rooms',roomsRouter)
    app.use('/account',accountRouter)
    app.use('/admin',adminRouter)
    app.use('/',siteRouter)
}

module.exports = route