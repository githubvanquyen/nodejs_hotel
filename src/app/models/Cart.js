const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const Cart = new Schema({
  cartId:{
    type: String,
    ref:"Accounts"
  },
  products:[
    {
      name: {type: String, maxlength:255},
      image: {type: String, maxlength:255},
      price: {type: String, maxlength:255},
    }
  
  ],
  status:{
    type: Boolean,
    default: true
  },
  modified:{
    type: Date,
    default: Date.now
  },
},{ timestamps: true });

module.exports = mongoose.model('Cart', Cart)