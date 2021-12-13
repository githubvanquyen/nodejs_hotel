const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Room = new Schema({
  typeRoom: {type: String, maxlength: 255},
  image:{type: String, maxlength: 255},
  price:{type: String, maxlength: 255},
  description:{type: String, maxlength: 500},
  areaRoom:{type:String, max: 100},
  slug: { type: String, slug: 'typeRoom', unique: true},
  extension:{type: String, maxlength: 255}
},{
    timestamps: true
});

module.exports = mongoose.model('Room', Room)