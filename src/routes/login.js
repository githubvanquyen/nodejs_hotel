const express =require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')
//newcontroller.index

router.get('/:_id/cart',userController.cart)
router.get('/',userController.index)



module.exports = router