import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // For navigation
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);
  // Delete Handlers
  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDelete(true);
  };
  const handleCloseDelete = () => {
    setShowDelete(false);
    setUserToDelete(null);
  };
  const handleConfirmDelete = () => {
    const updatedUsers = users.filter(u => u.email !== userToDelete.email);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    handleCloseDelete();
  };
  // Edit Handlers
  const handleEditClick = (user) => {
    setUserToEdit({ ...user });
    setShowEdit(true);
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
    setUserToEdit(null);
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUserToEdit((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveEdit = () => {
    const updatedUsers = users.map((user) =>
      user.email === userToEdit.email ? userToEdit : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    handleCloseEdit();
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center">User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteClick(user)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* React-Bootstrap Modal for Delete */}
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm User Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* React-Bootstrap Modal for Edit */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userToEdit?.name || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email (Cannot be changed)</Form.Label>
              <Form.Control
                type="email"
                value={userToEdit?.email || ""}
                disabled
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default UserList;