import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from '../config/axiosClient.js'
import { toast } from "react-toastify";

function Login() {

  const [credentials, setCredentials] = useState({ username: "", password: "" }); 
  const nevigate= useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await axiosClient.post(
          "/auth/login",
          {
              "getLoginBy": credentials.username,
              "password": credentials.password
          }
      );

      if (response.status === 200) {
        toast.success("Login SUccessfully...")
          sessionStorage.setItem("isAuthenticated", "true");
          nevigate("/adminpanel");
      }
  } catch (error) {
    toast.error(error.response.data)
    console.log(error);
    
  }

};

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="sec-content p-4 shadow-lg rounded bg-white" style={{ width: "400px" }}>
        <h2 className="sec-title text-center mb-4">Admin</h2>
        <form onSubmit={handleSubmit} className="itco-cform">
          <div className="contact-field mb-3">
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              className="form-control"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <div className="contact-field mb-3">
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button className="thm-btn mt-3 w-100">
              <span className="txt">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
