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
















const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://Bhargav:Bhargav@cluster0.53jvhcl.mongodb.net/studentDB?retryWrites=true&w=majority");
    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
