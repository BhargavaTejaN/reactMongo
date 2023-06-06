// const express = require("express");
// const Student = require("../models/index");
// const connectDB = require("../utils/db");

// const app = express();
// app.use(express.json());

// const startServer = async () => {
//   try {
//     await connectDB();
//     console.log("Connected To MongoDB");

//     // create a new student
//     app.post('/students',async (req,res)=> {
//         try{
//             const {name,age,gender,address} = req.body;
//             const newStudent = new Student({ name, age, gender, address });
//             const student = await newStudent.save();
//             res.status(201).json(student);
//         }catch(error){
//             console.error('Error creating student:', error);
//             res.status(500).json({ error: 'An error occurred' });
//         }
//     })

//     // get all students
//     app.get("/students",async(req,res) => {
//         try{
//             const students = await Student.find();
//             res.status(200).json(students);
//         }catch(error){
//             console.error('Error fetching students:', error);
//             res.status(500).json({ error: 'An error occurred' });
//         }
//     })

//     app.listen(3004, () => {
//       console.log("Server is running on port 3004");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// startServer();








const express = require("express");
const cors = require("cors");
const connectDB = require("../utils/db");
const Student = require("../models/index");

const app = express();
app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected To MongoDB");

    // create a new student
    app.post("/api/students", async (req, res) => {
      try {
        const student = new Student(req.body);
        await student.save();
        res.json({ success: true, student });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
    });

    // get students
    app.get("/api/students", async (req, res) => {
      try {
        const students = await Student.find();
        res.json({ success: true, students });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
    });

    app.listen(3004, () => {
      console.log("Server running on port 3004");
    });
  } catch (error) {
    console.log("Error In Connecting To MongoDB : ", error);
  }
};

startServer();

