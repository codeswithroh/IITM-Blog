import React from "react";
import HeroSection from "../../custom_components/hero_section/HeroSection";
import NavBar from "../../custom_components/navbar/NavBar";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default Home;
