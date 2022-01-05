const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const Order = new Schema({
  userId:{
    type: String,
  },
  roomName:{
    type: String,
  },
  roomPrice:{
    type: String,
  },
  dateIn:{
    type:Date,
  },
  dateOut:{
    type:Date,
  },
  member:{
    type: String,
  },
  phoneNumber:{
    type: Number,
  },
  sumPrice:{
    type: String
  }
},{ timestamps: true });

module.exports = mongoose.model('Order', Order)