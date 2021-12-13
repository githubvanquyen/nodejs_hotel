const Account = require('../models/Account')
const Room = require('../models/Rooms')
const formidable = require('formidable')
const path = require('path')
class AdminController{

    //GET /Account
    index(req, res, next) {
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
                        
                    }
                    else
                    res.send('đăng nhập thất bại')
                }
        })
    }
    create(req, res, next){
        /* const small = new Room(req.body);
        small.save(function (err) {
            if (err) return handleError(err)
            else{
                res.redirect('/admin')
            }
        // saved!
        });  */
        res.render('create',{layout:'admin'})
    }
    store(req,res,next){
        const form = formidable({ multiples: true,uploadDir: path.join(__dirname,'../../public/imgs'), keepExtensions:true });
        form.parse(req, (err, fields, files) => {
            if (err) {
            next(err);
            return;
            }
            else{
                
            const room ={
                "typeRoom" : fields.typeRoom,
                "image" : files.upload.newFilename,
                "price" : fields.price,
                "description" : fields.description,
                "areaRoom":fields.areaRoom,
                "extension":fields.extension
            }
            //res.json(room)
            const small = new Room(room);
                small.save(function (err) {
                if (err){
                    res.send('error')
                }
                else{
                    res.redirect('/admin/cap-nhat-phong') 
                } 
        // saved!
            }); 
            }
       
        }); 
    

    }
    //update
    update(req,res,next){

        Room.find({})
            .then(Rooms => {
                Rooms = Rooms.map( Room => Room.toObject())
                res.render('admin/update',{ Rooms , layout: 'admin'})
            })
            .catch(next)
    }

    //delete
    delete(req,res,next){
        res.render('admin/delete',{Room,layout:'admin'})
    }
    updateItem(req,res,next){
        
        Room.findOne({slug: req.params.slug})
            .then(roomUpdate =>{
                roomUpdate = roomUpdate.toObject();
                res.render('admin/UpdateItem',{ roomUpdate , layout: 'admin'})
            })
            .catch(next)
        
    }
    updatedItem(req,res,next){
        const form = formidable({ multiples: true ,uploadDir: path.join(__dirname,'../../public/imgs'), keepExtensions:true });
        form.parse(req, (err, fields, files) => {
            if (err) {
            next(err);
            return;
            }
            else{
                
            const room ={
                "typeRoom" : fields.typeRoom,
                "image" : files.upload.newFilename,
                "price" : fields.price,
                "description" : fields.description,
                "areaRoom":fields.areaRoom,
                "extension":fields.extension
                }
            Room.updateOne({slug: req.params.slug}, room)
            .then(()=>{
                    res.redirect('/admin/cap-nhat-phong')
                }
            )
            .catch(next)  
            }                                                                                  
        })
        
           

    }

    // delete khách sạn
    deleteItem(req,res,next){
        Room.findOne({slug: req.params.slug})
            .then(roomDelete =>{
                roomDelete = roomDelete.toObject();
                res.render('admin/DeleteItem',{ roomDelete , layout: 'admin'})
            })
            .catch(next)
    }
    deletedItem(req,res,next){
        Room.deleteOne({slug: req.params.slug})
            .then(()=>{
                    res.redirect('/admin/cap-nhat-phong')
                }
            )
            .catch(next)
        
    }
    
   
}

module.exports = new AdminController