import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove the token
        localStorage.removeItem("userId")
        toast.danger("Logged out successfully!"); // Show a logout message
        navigate("/signin"); // Redirect to the Sign-in page
    };
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/upcomingEvents">Upcoming Events</Link></li>
                <li><Link to="/registeredEvents">Event management</Link></li>
                <li style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</li>
            </ul>
        </div>
    );
}

export default Sidebar;
