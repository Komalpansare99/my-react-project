import React, { useState, useEffect, useRef } from 'react';
const ChatList = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('Anne Hunter'); // Replace with logged-in user
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  // Load messages from local storage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('chats')) || [];
    setMessages(storedMessages);
  }, []);
  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  // Handle sending a message
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const message = {
      user,
      text: newMessage,
      timestamp: new Date().toLocaleString(),
    };
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem('chats', JSON.stringify(updatedMessages));
    setNewMessage('');
  };
  const handleRefresh = () => {
    const storedMessages = JSON.parse(localStorage.getItem('chats')) || [];
    setMessages(storedMessages);
  };
  return (
    <div className="container mt-4">
      <h3 className="text-center">Group Chat</h3>
      <div className="card">
        <div className="card-header bg-primary text-white">
          Chat History
        </div>
        <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.user}</strong> [{msg.timestamp}]: {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="btn btn-success" onClick={sendMessage}>Send</button>
            <button className="btn btn-secondary ms-2" onClick={handleRefresh}>Refresh</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatList;