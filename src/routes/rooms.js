const express =require('express')
const router = express.Router()

const roomscontroller = require('../app/controllers/RoomsController')
//newcontroller.index
router.use('/',roomscontroller.index)


module.exports = router