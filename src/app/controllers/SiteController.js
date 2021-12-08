
class SiteController{
    home(req, res){
        res.render('home')
    }
    contact(req,res){
        res.send('đây là trang liên hệ')
    }
}

module.exports = new SiteController