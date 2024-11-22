import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreatePatient from "./CreatePatient"; // Import CreatePatient component
import SearchPatients from "./SearchPatients"; // Import SearchPatients component

const App = () => {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>Create Patient</Link>
        <Link to="/search" style={linkStyles}>Search Patients</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<CreatePatient />} />
        <Route path="/search" element={<SearchPatients />} />
      </Routes>
    </Router>
  );
};

// Inline Styles for Navigation Bar (Optional)
const navStyles = {
  padding: "10px",
  background: "#f1f1f1",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const linkStyles = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "bold",
};

export default App;

