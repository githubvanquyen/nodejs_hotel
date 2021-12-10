const express =require('express')
const router = express.Router()

const roomscontroller = require('../app/controllers/RoomsController')
//newcontroller.index

router.get('/:slug',roomscontroller.detail)
router.get('/',roomscontroller.index)



module.exports = router