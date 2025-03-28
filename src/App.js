import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginSuccessful from "./components/LoginSuccessful";
import RegisterSuccessful from "./components/RegisterSuccessful";
import ChatList from "./components/ChatList";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import DocumentList from "./components/DocumentList";
import Logout from "./components/Logout";
import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/common/Navbar";


function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
                <Route path="/login-successful" element={<LoginSuccessful />} />
            </Routes>
            <Routes>
                <Route path="/register-successful" element={<RegisterSuccessful />} />
            </Routes>
            <Routes>
                <Route path="/chat-list" element={<PrivateRoute><ChatList /></PrivateRoute>} />
            </Routes>
            <Routes>
                <Route path="/user-list" element={<PrivateRoute><UserList /></PrivateRoute>} />
            </Routes>
            <Routes>
                <Route path="/edit-user/:email" element={<PrivateRoute><EditUser /></PrivateRoute>} />
            </Routes>
            <Routes>
                <Route path="/document-list" element={<PrivateRoute><DocumentList /></PrivateRoute>} />
            </Routes>
            <Routes>
                <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}
export default App;