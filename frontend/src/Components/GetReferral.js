// src/components/GetReferral.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetReferral = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    video: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    if (formData.resume) formDataToSubmit.append("resume", formData.resume);
    if (formData.video) formDataToSubmit.append("video", formData.video);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/get_referral/",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response);
      navigate("/success");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Get a Referral</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields as before */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Resume: </label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Intro Video: </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetReferral;
