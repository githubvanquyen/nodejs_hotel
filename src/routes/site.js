const express = require('express')
const router = express.Router()

const siteController  = require('../app/controllers/SiteController')
const userController = require('../app/controllers/UserController')

router.get('/contact', siteController.contact)
router.get('/',siteController.home)
router.post('/',siteController.register)
router.post('/login',siteController.login)
router.get('/login',siteController.cart)

router.get('/cart/:_id',userController.cart)
router.get('/order/:_id',userController.bill)
router.get('/cart/delete/:_id',userController.delete)
router.post('/cart/:_id',userController.order)




module.exports = router