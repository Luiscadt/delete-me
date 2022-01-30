import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import NotFound404 from "./pages/NotFound404";
import User from "./pages/User";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutPage />}>
          <Route path="welcome" element={<p>Welcome!!!</p>} />
        </Route>
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/usuarios" element={<Navigate to="/user" />}></Route>
        <Route path="/dashboard/*" element={<DashboardPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}
