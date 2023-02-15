import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./Herosection.css";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <h1>Rock 'n' Rogue</h1>
        <span>
          <p className="blurb-p"> Professional Catering and Tour services</p>
        </span>
        <div className="image-wrapper">
          <Link to="./Services">
            {" "}
            <img src="../images/logo2.png" className="logo1" alt=""></img>
          </Link>
          <Link to="./Rock">
            <img src="../images/logo1.png" className="logo1" alt=""></img>
          </Link>
        </div>

       
      </div>
    </div>
  );
}

export default HeroSection;
