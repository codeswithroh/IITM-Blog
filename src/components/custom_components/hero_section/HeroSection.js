import React from "react";
import Background from "../../../assets/svgs/girl.svg";
import "./HeroSection.scss";

function HeroSection() {
  const scrollPage = () => {
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="HeroSection">
      <div className="HeroSection__container">
        <div className="HeroSection__image">
          <img src={Background} alt="..." />
        </div>
        <div className="HeroSection__body">
          <div className="HeroSection__body__heading">
            <h1>
              <div className="HeroSection__body__heading__top">We Share</div>
              <div>Knowledge</div>
            </h1>
          </div>
          <div className="HeroSection__body__sub__heading">
            <p>
              Join our community to learn and share your knowledge with the rest
              of the world
            </p>
          </div>
          <div className="HeroSection__body__button">
            <button>Start A Blog</button>
          </div>
        </div>
      </div>
      <div onClick={() => scrollPage()} className="HeroSection--scroll">
        <i className="fas fa-chevron-down fa-2x"></i>
        <i className="fas fa-chevron-down fa-2x"></i>
      </div>
    </div>
  );
}

export default HeroSection;
