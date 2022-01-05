const Room = require('../models/Rooms')
/* const AccountUser = require('../models/AccountUser') */
const Account = require('../models/Account')
const Cart = require('../models/Cart')
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
    register(req, res, next){
        const account = new Account({name: req.body.name, email: req.body.email, password: req.body.password});
        /* console.log(account); */
        account.save(function (err) {
                if (err){
                   res.send("<h3> đăng kí thất bại</h3>")
                }
                else{
                    res.send("<h3>đăng kí thành công</h3>") 
                } 
        // saved!
        }); 
    }
    login(req, res, next){
        Account.findOne({email: req.body.email, password: req.body.password})
            .then((account)=>{
                //res.json(account.name === 'admin')
                    if(account.email == 'admin'){
                    
                         Room.find({})
                        .then(Rooms => {
                            Rooms = Rooms.map( Room => Room.toObject())
                            res.render('admin',{ Rooms , layout: 'admin'})
                        })
                        .catch(next)
                    }
                    else{
                        const accountUser = account.toObject()
                        Room.find({})
                        .then( Rooms=> {
                            Rooms = Rooms.map( Room => Room.toObject())
                            res.render('homeUser',{ Rooms, accountUser, layout: 'users'})
                            
                        })
                        .catch(next)
                    }
                }
            )
            .catch(()=>{res.send('<h3>Đăng nhập thất bại</h3>'); next()})
        /* Account.findOne({name: req.body.name, password: req.body.password}, (err, account)=>{
            if(err) {
                return res.send("<h3>đăng nhập thất bại</h3>")
            }
            else{
                
                if(account.name == 'admin'){
                    
                    Room.find({})
                        .then(Rooms => {
                            Rooms = Rooms.map( Room => Room.toObject())
                            res.render('admin',{ Rooms , layout: 'admin'})
                        })
                        .catch(next)
                }
                else{
                    Room.find({})
                    .then(Rooms => {
                        Rooms = Rooms.map( Room => Room.toObject())
                        res.render('home',{ Rooms , layout: 'users'})
                    })
                    .catch(next)
                }
            }
        }) */
            /* Room.find({})
            .then(Rooms => {
                Rooms = Rooms.map( Room => Room.toObject())
                res.render('admin',{ Rooms , layout: 'admin'})
            })
            .catch( res.send("<h3>đăng nhập thất bại</h3>"))
        AccountUser.findOne({name: req.body.name, password: req.body.password})
            Room.find({})
            .then(Rooms => {
                Rooms = Rooms.map( Room => Room.toObject())
                res.render('home',{ Rooms , layout: 'users'})
            })
            .catch( res.send("<h3>đăng nhập thất bại</h3>")) */
    }
    cart(req, res, next){
        //const { name, image,  price } = req.body;
        const cart = new Cart({cartId: req.query.cartId,products:[{name: req.query.name, image: req.query.image, price: req.query.price}]});
                cart.save(function (err) {
                    if (err){
                       next()
                    }
                    else{
                        res.redirect('/cart/'+req.query.cartId)
                    } 
                // saved!
                });
        /* 
        Cart.findOne({cartId: req.query.cartId})
            .then((cartOld)=>{
                Cart.updateOne({cartId: req.query.cartId,products:[{name: req.query.name, image: req.query.image, price: req.query.price}]})
                    .then(()=>{
                        res.send('update')
                    })
                    .catch(next)
            })
            .catch(()=>{
                const cart = new Cart({cartId: req.query.cartId,products:[{name: req.query.name, image: req.query.image, price: req.query.price}]});
                cart.save(function (err) {
                    if (err){
                       res.send("<h3>thất bại</h3>")
                    }
                    else{
                        res.send("<h3>thành công</h3>")
                    } 
                // saved!
                });
            }
            ) */
    }
}

module.exports = new SiteController