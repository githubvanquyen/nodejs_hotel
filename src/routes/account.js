const express =require('express')
const router = express.Router()

const accountcontroller = require('../app/controllers/AccountController')
//newcontroller.index

router.get('/',accountcontroller.index)



module.exports = router