import React from "react";
import Background from "../../../assets/svgs/girl.svg";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="HeroSection__container">
        <div className="HeroSection__image">
          <img src={Background} alt="..." />
        </div>
        <div className="HeroSection__body">
          <div className="HeroSection__body__heading">
            <h1>
              <div>We Share</div>
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
    </div>
  );
}

export default HeroSection;
