const express =require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')
const siteController = require('../app/controllers/SiteController')
const { route } = require('./rooms')
//newcontroller.index

router.get('/:_id/cart',userController.cart)
router.get('/',userController.index)
router.post('/',siteController.login)



module.exports = router