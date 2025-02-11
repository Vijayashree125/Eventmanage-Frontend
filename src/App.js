// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import LandingPage from './Pages/landingPage';
import Signup from "./components/SignUp";  
import Signin from "./components/SignIn";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import { ToastContainer } from "react-toastify";
import UpcomingEvents from './components/upcomingevents';
import RegisteredEvents from './components/getregisteredUsers';

function PrivateRoute({ children }) {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/signin" />;
}

function App() {
  return (
    <Router>
            <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/upcomingEvents" element={<PrivateRoute><UpcomingEvents /></PrivateRoute>} />
        <Route path="/registeredEvents" element={<PrivateRoute><RegisteredEvents /></PrivateRoute>} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
