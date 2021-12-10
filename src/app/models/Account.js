const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const Account = new Schema({
  name: {type: String, maxlength: 255},
  password:{type: String, maxlength: 255},
  
});

module.exports = mongoose.model('Account', Account)