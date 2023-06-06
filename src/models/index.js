// const mongoose = require('mongoose');

// const studentSchema  = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//       },
//       age: {
//         type: Number,
//         required: true
//       },
//       gender: {
//         type: String,
//         required: true
//       },
//       address: {
//         type: String,
//         required: true
//     }
// },{ timestamps: true });

// const Student = mongoose.model('Student',studentSchema);
// module.exports = Student;




const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true }
});

const student = mongoose.model("Student", studentSchema);

module.exports = student;






