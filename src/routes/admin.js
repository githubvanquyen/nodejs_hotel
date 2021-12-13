const express =require('express')
const router = express.Router()
const admincontroller = require('../app/controllers/AdminController')
//newcontroller.index


router.get('/',admincontroller.index)
router.post('/',admincontroller.index)

router.get('/them-phong',admincontroller.create)
router.get('/them-phong',admincontroller.store)
router.post('/them-phong',admincontroller.store)

router.get('/cap-nhat-phong',admincontroller.update)

router.get('/cap-nhat-phong/:slug/cap-nhat',admincontroller.updateItem)
router.post('/cap-nhat-phong/:slug/cap-nhat',admincontroller.updatedItem)

router.get('/cap-nhat-phong/:slug/xoa',admincontroller.deleteItem)
router.post('/cap-nhat-phong/:slug/xoa',admincontroller.deletedItem)

router.get('/xoa-phong',admincontroller.delete)

module.exports = router