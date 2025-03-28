import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.email === user.email)) {
      alert("Email already registered");
      return;
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/register-successful");
  };
  return (
    <div className="container w-50 mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleRegister} className="p-3 border rounded shadow">
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Enter Name"
            onChange={(e) => setUser({...user, name: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter Email"
            onChange={(e) => setUser({...user, email: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter Password"
            onChange={(e) => setUser({...user, password: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label>Confirm Password:</label>
          <input type="password" className="form-control" placeholder="Enter Password"
            onChange={(e) => setUser({...user, password: e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};
export default Register;