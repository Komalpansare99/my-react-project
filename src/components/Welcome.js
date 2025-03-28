import React from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to User Module </h1>
      <div className="mt-4">
        <h2>Existing Users </h2>
        <Link to="/login" className="btn btn-primary m-2">Login</Link>
        <h2 className="mt-4">New Users </h2>
        <Link to="/register" className="btn btn-secondary m-2">Register</Link>
      </div>
    </div>
  );
};
export default Welcome;