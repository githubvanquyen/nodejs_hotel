const roomsRouter = require('./rooms')
const siteRouter = require('./site')
const accountRouter = require('./account')
const adminRouter = require('./admin')
const userRouter = require('./user')
const loginRouter =require('./login')

function route(app) {

    app.use('/rooms',roomsRouter)
    app.use('/account',accountRouter)
    app.use('/user',userRouter)
    app.use('/admin',adminRouter)
    /* app.use('/login',loginRouter) */
    app.use('/',siteRouter)
}

module.exports = route