import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap
const EditUser = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = users.find(u => u.email === email);
    if (foundUser) setUser(foundUser);
  }, [email]);
  const handleUpdate = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Update the user details
    users = users.map(u => (u.email === email ? user : u));
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/user-list");
  };
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-header text-center bg-light">
          <h4>Edit User Information</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-info">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditUser;