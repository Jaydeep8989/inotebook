const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/";
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
mongoose.set("strictQuery", false);
const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Mongo connected");
    })
}

module.exports = connectToMongo; 