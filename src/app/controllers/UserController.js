const Account = require('../models/Account')
const accountUsers = require('../models/AccountUser')
const Room = require('../models/Rooms')
const Cart = require('../models/Cart')
const Order = require('../models/Order')
class UserController{

    //GET /Account
    index(req, res, next) {
        accountUsers.findOne({name: req.body.name, password: req.body.password},(error, accountUser) =>{
            if(error) return res.send('dăng nhập thất bại')
            else
                {
                    if(accountUser !== null){
                        Room.find({})
                        .then(Rooms => {
                            Rooms = Rooms.map( Room => Room.toObject())
                            res.render('homeUser',{ Rooms , layout: 'users'})
                        })
                        .catch(next)
                        
                    }
                    else
                    res.send('đăng nhập thất bại')
                }
        })
    }
    cart(req, res, next){
      
        Cart.find({cartId : req.params._id})
            .then((carts) =>{
                carts = carts.map( cart => cart.toObject())
                res.render('cart/cart',{ carts ,layout: 'cart'})
            })
            .catch(next)
    }
    delete(req, res, next){
        //console.log(Cart.findOne())
        Cart.deleteOne({_id: req.params._id})
        .then(()=>{

            res.redirect('back')
        })
        .catch(next)
    }
    order(req, res, next){
        const userId= req.params._id;
        
        Cart.findOne({cartId: req.params._id})
            .then((cart)=>{
                console.log(cart._id);
                const order = new Order({
                    userId: req.params._id,
                    roomName:cart.products[0].name,
                    roomPrice:cart.products[0].price,
                    dateIn: req.body.datein,
                    dateOut: req.body.dateout,
                    member: req.body.member,
                    phoneNumber: req.body.phone,
                    sumPrice: req.body.sumPrice
                });
                order.save()
                    .then(()=>{
                        res.redirect('/order/'+req.params._id)
                    })
                    .catch(next)
            })
            .catch(next)
        
    }
    bill(req, res, next){
        Order.findOne({userId : req.params._id})
            .then(order =>{
                const orders = order.toObject()
                res.render('cart/order',{ orders ,layout: 'cart'})
            })
            .catch(()=>{
                res.send("<h3>bạn chưa có hóa đơn nào</h3>")
            })
    }
}
module.exports = new UserController