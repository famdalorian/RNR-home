import React from "react";
import "../../App.css";

import HeroSection from "../HeroSection";
import Footer from "../Footer";
import MeetChefs from "../pages/Meetchefs";
import Services from "./Services"

function Home() {
  return (
    <>
      <HeroSection />
      <MeetChefs />
      <Services/>
      <Footer />
    </>
  );
}

export default Home;
