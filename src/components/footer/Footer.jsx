import React from "react";
import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="bg-[#088269] pt-[40px] pb-[90px] sm:pb-[80px]  text-[#fff]">
      <div className="max-w-[1350px] mx-auto px-5">
        <FooterTop />
        <FooterCenter />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
