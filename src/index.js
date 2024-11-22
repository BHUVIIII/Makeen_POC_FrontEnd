import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreatePatient from './CreatePatient';
import SearchPatients from './SearchPatients';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreatePatient />
  </React.StrictMode>
);
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <SearchPatients />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
