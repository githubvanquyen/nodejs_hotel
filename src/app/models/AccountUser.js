const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const AccountUser = new Schema({
  name: {type: String, maxlength: 255},
  password:{type: String, maxlength: 255},
  
});

module.exports = mongoose.model('AccountUser', AccountUser)