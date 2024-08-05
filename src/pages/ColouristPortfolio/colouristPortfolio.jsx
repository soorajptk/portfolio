import React from "react";
import { Navbar } from "../../components/Navbar";
import { ColouristProfile } from "../../components/colouristProfile";
import { ImageSliderWrapper } from "../../components/ImageSliderWrapper";
import { FooterSticky } from "../../components/FooterSticky";

const ColouristPortfolio = () => {
  return (
    <>
      <div className="container max-w-custom mx-auto">
        <Navbar />
        <ColouristProfile />
        <ImageSliderWrapper />
      </div>
        <FooterSticky />
    </>
  );
};

export default ColouristPortfolio;
