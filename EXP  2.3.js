import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    address: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    alert("Form submitted successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      dob: "",
      address: ""
    });
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Register</a>
        <a href="#">Contact</a>
      </nav>

      <div className="container">
        <h2>User Personal Information</h2>

        <form onSubmit={handleSubmit}>
          <label>Enter your full name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            pattern="[A-Za-z ]{3,}"
            title="Only letters, minimum 3 characters"
          />

          <label>Enter your email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Enter your password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />

          <label>Confirm your password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength="6"
          />

          <label>Enter your gender</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            /> Male

            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            /> Female

            <input
              type="radio"
              name="gender"
              value="Others"
              checked={formData.gender === "Others"}
              onChange={handleChange}
            /> Others
          </div>

          <label>Enter your Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <label>Enter your Address</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          {error && <p className="error">{error}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
