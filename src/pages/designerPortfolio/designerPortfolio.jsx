import React from "react";
import { Navbar } from "../../components/Navbar";
import { FooterSticky } from "../../components/FooterSticky";
import { DesignerProfile } from "../../components/designerProfile";
import { PhotoContainer } from "../../components/photoContainer";

export const DesignerPortfolio = () => {
  return (
    <>
      <div className="container max-w-custom mx-auto">
        <Navbar />
        <DesignerProfile/>
        <PhotoContainer/>
      </div>
      <FooterSticky />
    </>
  );
};