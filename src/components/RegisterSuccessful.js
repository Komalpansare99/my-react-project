import React from "react";
import { Link } from "react-router-dom";
const RegisterSuccessful = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Registration Successful</h2>
      <p>Thank you for your registration</p>
      <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>
        Click to return to home page
      </Link>
    </div>
  );
};
export default RegisterSuccessful;