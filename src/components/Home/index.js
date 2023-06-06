import React, { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    address: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { name, age, gender, address } = formData;

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, age, gender, address })
      };
      const response = await fetch("http://localhost:3004/api/students", options);
      const data = await response.json();
      if (data.success) {
        alert("student added successfully");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }

    setFormData({
      name: "",
      age: "",
      gender: "",
      address: ""
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          value={formData.name}
        />
        <input
          name="age"
          onChange={handleChange}
          type="text"
          placeholder="Age"
          value={formData.age}
        />
        <input
          name="gender"
          onChange={handleChange}
          type="text"
          placeholder="Gender"
          value={formData.gender}
        />
        <input
          name="address"
          onChange={handleChange}
          type="text"
          placeholder="Address"
          value={formData.address}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Home;
