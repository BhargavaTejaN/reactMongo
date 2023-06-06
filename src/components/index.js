// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function StudentApp() {
//   const [students, setStudents] = useState([]);
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get('/students');
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/students', { name, age, gender, address });
//       const newStudent = response.data;
//       setStudents([...students, newStudent]);
//       setName('');
//       setAge(0);
//       setGender('');
//       setAddress('');
//     } catch (error) {
//       console.error('Error creating student:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Students List</h1>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
//         <input type="number" placeholder="Age" value={age} onChange={e => setAge(Number(e.target.value))} />
//         <input type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
//         <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
//         <button type="submit">Add Student</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student._id}>
//               <td>{student._id}</td>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>{student.gender}</td>
//               <td>{student.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

