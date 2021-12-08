
class RoomsController{

    //GET /rooms
    index(req, res) {
        res.render('rooms')
    }
}

module.exports = new RoomsController