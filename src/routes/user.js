const express =require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')
//newcontroller.index


router.get('/',userController.index)

router.get('/cart',userController.cart)


module.exports = router