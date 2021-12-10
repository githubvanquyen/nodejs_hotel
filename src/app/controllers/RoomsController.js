const Room = require('../models/Rooms')
class RoomsController{

    //GET /rooms
    index(req, res) {
        res.render('rooms')
    }
    //get / rooms/:id
    detail(req, res, next){
        
         Room.findOne({slug: req.params.slug})
            .then( detailRoom =>{
                detailRoom = detailRoom.toObject();
                res.render('detailRoom',{detailRoom}) 
            })
            .catch(next) 
        
    }   
}

module.exports = new RoomsController