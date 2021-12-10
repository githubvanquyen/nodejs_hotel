const Account = require('../models/Account')
const Room = require('../models/Account')
class AccountController{

    //GET /Account
    index(req, res, next) {
        res.send('day là trang account')
    }
    
   
}

module.exports = new AccountController