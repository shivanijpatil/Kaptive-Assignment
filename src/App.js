import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.js';
import Table_1 from './Components/Dashboard/Table_1/Table_1.js';
import './App.css';
import LoginSignup from "./Components/Dashboard/LoginSignup/LoginSignup1.jsx";

function App() {
  return (
    document.title = 'PLSE',
    <body>

      <Routes>
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Result" element={<Table_1 />} />
      </Routes>
    </body>
  );
}

export default App;
