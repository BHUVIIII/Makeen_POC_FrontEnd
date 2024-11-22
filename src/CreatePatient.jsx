
import "./CreatePatient.css"
import React, { useState } from "react";

const CreatePatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Debugging: Check the data before submission
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name} // Controlled value
        onChange={handleChange} // Update state on input change
        required
      />
      <label htmlFor="birthdate">Birthdate:</label>
      <input
        id="birthdate"
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
        required
      />
      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Patient</button>
    </form>
  );
};

export default CreatePatient;
