import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">CommApp</Link>
        <div>
          <Link className="nav-link d-inline text-white mx-2" to="/chat-list">Chats</Link>
          <Link className="nav-link d-inline text-white mx-2" to="/user-list">Users</Link>
          <Link className="nav-link d-inline text-white mx-2" to="/document-list">Documents</Link>
          <Link className="nav-link d-inline text-white mx-2 btn btn-danger btn-sm" to="/logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
