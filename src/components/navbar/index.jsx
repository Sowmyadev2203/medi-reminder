import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./navbar";

const App = () => {
  return (
    <Router> {/* Make sure BrowserRouter is wrapping your entire app */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/services" element={<h2>Services Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
