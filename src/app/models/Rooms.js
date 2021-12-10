const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const Room = new Schema({
  typeRoom: {type: String, maxlength: 255},
  image:{type: String, maxlength: 255},
  price:{type: String, maxlength: 255},
  description:{type: String, maxlength: 255},
  slug:{type: String, maxlength: 255}
});

module.exports = mongoose.model('Room', Room)