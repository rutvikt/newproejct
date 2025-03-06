import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../src/Componants/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  // Example state (not needed for routing but keeping it for future use)

  return (
    <Router>
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  );
}

export default App;
