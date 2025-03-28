import React from "react";
import { Link } from "react-router-dom";
const LoginSuccessful = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Login Successful!</h2>
      <Link to="/chat-list" className="btn btn-primary">Go to Chat</Link>
    </div>
  );
};
export default LoginSuccessful;