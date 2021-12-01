import React from "react";
import ArticleCardContainer from "../../custom_components/article_card_container/ArticleCardContainer";
import HeroSection from "../../custom_components/hero_section/HeroSection";
import NavBar from "../../custom_components/navbar/NavBar";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <HeroSection />
      <ArticleCardContainer />
    </div>
  );
}

export default Home;
