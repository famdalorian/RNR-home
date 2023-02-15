import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Meetchefs from "./components/pages/Meetchefs";
import Footer from "./components/Footer";
import Rock from "./components/pages/Rock";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Weddings from "./components/pages/Weddings";
import Corporate from "./components/pages/Corporate";
import Functions from "./components/pages/Functions";
import FinishAtHome from "./components/pages/FinishAtHome";
import FineDining from "./components/pages/FineDining";
import MealPrep from "./components/pages/MealPrep";
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
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Weddings" element={<Weddings />} />
          <Route path="/Functions" element={<Functions />} />
          <Route path="/FineDining" element={<FineDining />} />
          <Route path="/MealPrep" element={<MealPrep />} />
          <Route path="/FinishAtHome" element={<FinishAtHome />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
