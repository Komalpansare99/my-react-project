import React, { useState, useRef } from 'react';
const DocumentList = () => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const fileInputRef = useRef(null);
  // Handle file upload
  const handleFileUpload = () => {
    if (!selectedFile) return;
    const newFile = {
      id: Date.now(),
      name: selectedFile.name,
      description: description,
      sharedWith: '',
    };
    setFiles([...files, newFile]);
    setSelectedFile(null);
    setDescription('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };
  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // Handle editing file description
  const handleEdit = (index) => {
    setEditIndex(index);
    setDescription(files[index].description);
  };
  // Save edited file description
  const handleSaveEdit = (index) => {
    const updatedFiles = [...files];
    updatedFiles[index].description = description;
    setFiles(updatedFiles);
    setEditIndex(null);
    setDescription('');
  };
  // Handle file delete
  const handleDelete = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };
  // Handle sharing a file
  const handleShare = (index) => {
    const sharedWith = prompt('Enter email to share with:');
    if (sharedWith) {
      const updatedFiles = [...files];
      updatedFiles[index].sharedWith = sharedWith;
      setFiles(updatedFiles);
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center">File Manager</h2>
      {/* Upload Section */}
      <div className="card p-3 mb-4">
        <h4>Upload File</h4>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="File Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          className="form-control mb-2"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <button className="btn btn-primary" onClick={handleFileUpload}>
          Upload Now
        </button>
      </div>
      {/* File List */}
      <div className="card p-3">
        <h4>My Uploads</h4>
        {files.length === 0 ? (
          <p>No files uploaded.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Description</th>
                <th>Shared With</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={file.id}>
                  <td>{file.name}</td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    ) : (
                      file.description
                    )}
                  </td>
                  <td>{file.sharedWith || 'Not shared'}</td>
                  <td>
                    {editIndex === index ? (
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleSaveEdit(index)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleShare(index)}
                    >
                      Share
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default DocumentList;