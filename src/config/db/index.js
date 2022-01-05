const mongoose = require('mongoose');

/*  async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/hotel_dev');
        console.log('connect succesfully!!!');
    }
    catch (error){
        console.log('connect failure!!!');
    }
} */
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotel_dev ';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('connect failure'));

module.exports = {connect}