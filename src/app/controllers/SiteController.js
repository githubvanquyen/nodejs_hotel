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
    
    
}

module.exports = new SiteController