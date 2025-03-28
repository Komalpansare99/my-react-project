import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === credentials.email && user.password === credentials.password);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/login-successful");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="container w-50 mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin} className="p-3 border rounded shadow">
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter Email"
            onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter Password"
            onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};
export default Login;