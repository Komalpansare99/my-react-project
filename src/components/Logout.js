import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Remove the logged-in user from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the Welcome page after logout
    navigate("/");
  }, [navigate]);
  return (
    <div className="container text-center mt-5">
      <h2>Logging out...</h2>
    </div>
  );
};
export default Logout;