import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Meetchefs from "./components/pages/Meetchefs";
import Footer from "./components/Footer";
import Rock from "./components/pages/Rock"
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Meetchefs" element={<Meetchefs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Rock" element={<Rock />} />

        </Routes>{" "}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
