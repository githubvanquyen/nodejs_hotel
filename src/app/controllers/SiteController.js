const Room = require('../models/Rooms')
const Account = require('../models/Account')
class SiteController{
    home(req, res, next){

       
        Room.find({})
        .then(Rooms => {
            Rooms = Rooms.map( Room => Room.toObject())
            res.render('home',{Rooms})
        })
        .catch(next)

    }
    contact(req,res){
        res.send('hello')
        
    }
    account(req,res,next){
        Account.findOne({name: req.body.name, password: req.body.password},(error, account) =>{
            if(error) return res.send('dăng nhập thất bại')
            else
                {
                    if(account !== null){
                        Room.find({})
                        .then(Rooms => {
                            Rooms = Rooms.map( Room => Room.toObject())
                            res.render('admin',{ Rooms , layout: 'admin'})
                        })
                        .catch(next)
                        //res.render('admin',{ title: 'admin', layout: 'admin'})
                    }
                    else
                    res.send('đăng nhập thất bại')
                }
        })
        
    }
}

module.exports = new SiteController