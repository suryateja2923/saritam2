import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "",
    gender: "",
    mobile: "",
    email: "",
    college: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    const allFilled = Object.values(formData).every(
      (value) => value.trim() !== "",
    );

    if (!allFilled) {
      setError("Fill all details");
      return;
    }

    setError("");
    navigate("/register/step2", { state: formData });
  };

  return (
    <div className="anime-form-wrapper">
      <div className="anime-form-container">
        <h1>Fest Registration</h1>

        <form className="anime-form" onSubmit={handleNext}>
          <div className="input-box">
            <input name="name" onChange={handleChange} />
            <label>Name</label>
          </div>

          <div className="input-box">
            <input name="branch" onChange={handleChange} />
            <label>Branch Name</label>
          </div>

          <div className="input-box">
            <select name="year" onChange={handleChange}>
              <option value="">Acadamic Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
            <label>Acadamic Year</label>
          </div>

          <div className="input-box">
            <select name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <label>Gender</label>
          </div>

          <div className="input-box">
            <input type="tel" name="mobile" onChange={handleChange} />
            <label>Mobile Number</label>
          </div>

          <div className="input-box">
            <input type="email" name="email" onChange={handleChange} />
            <label>Email Address</label>
          </div>

          <div className="input-box">
            <input name="college" onChange={handleChange} />
            <label>College Name</label>
          </div>

          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}

          <button className="submit-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm1;
