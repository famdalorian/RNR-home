import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products"
import Meetchefs from "./components/pages/Meetchefs";
import Services from "./components/pages/Services";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Meetchefs" element={<Meetchefs/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Products" element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
