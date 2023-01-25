import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Card from "./components/Cards"
import Meetchefs from "./components/pages/Meetchefs"
function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Home />
        
        <Routes>
          <Route path="/Cards"  component={Home} />
          <Route path="/Services" component={Meetchefs} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
