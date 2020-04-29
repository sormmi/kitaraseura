import React from "react";
import { RichText } from "prismic-reactjs";
import HeroSection from "./Hero.styles"

const defaultTheme = {
  height: "calc(100vh - 100px)",
};

const Hero = ({ title, content, backgroundImage, theme }) => {
  return (
    <HeroSection
      backgroundImage={backgroundImage}
      theme={!!theme ? theme : defaultTheme}
    >
      <div>
        <RichText render={title} />
        <p>{content}</p>
      </div>
    </HeroSection>
  );
};

export default Hero;
