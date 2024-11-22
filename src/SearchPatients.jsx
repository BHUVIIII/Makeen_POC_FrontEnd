import React, { useState } from "react";
import axios from "axios";
import "./SearchPatient.css";

const SearchPatients = ({ onEdit }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.length < 3) {
      alert("Enter at least 3 characters.");
      return;
    }
    try {
      const response = await axios.get(`/api/patients/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      alert("Error fetching patients: " + error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search patients by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.phone}
            <button onClick={() => onEdit(patient)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPatients;
