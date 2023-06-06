// const mongoose = require('mongoose');
// require('dotenv').config();

// // const mongoDBUrl = 'mongodb://localhost:27017/studentDB';

// const mongoDBUrl = process.env.MONGO;

// const connectDB = async () => {
//     try{
//         await mongoose.connect(mongoDBUrl,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         console.log('Connected to MongoDB');
//     }catch(error){
//         console.error('Error connecting to MongoDB:', error);
//         throw error;
//     }
// }

// module.exports = connectDB;
















const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("StudentDB");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectDB;
