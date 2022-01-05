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


async function connect(){
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotel_dev ';
    try{
        await mongoose.connect(uri);
        console.log('connect succesfully!!!');
    }
    catch (error){
        console.log('connect failure!!!'+ error);
    }
}

module.exports = {connect}