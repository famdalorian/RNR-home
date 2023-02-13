import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./Herosection.css";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Rock & Rogue</h1>
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

        <div className="hero-btns">
          <Button
            to="/Rock"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Meet The Chefs
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
