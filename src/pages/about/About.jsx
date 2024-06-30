import React from "react";
import MarqueePage from "../../components/ui/Marquee";
import HomeCards from "../../components/ui/HomeCards";
import Brend from "../../components/ui/Brend";
import Sertificat from "../../components/ui/Sertificat";
import Contact from "../../components/home/Contact";
import Partnyor from "../../components/about/Partnyor";
import Opit from "../../components/about/Opit";
import Hero from "../../components/about/Hero";

const About = () => {
  return (
    <div>
      <Hero />
      <Partnyor />
      <Opit />
      <MarqueePage />
      <HomeCards />
      <Brend />
      <Sertificat />
      <Contact />
    </div>
  );
};

export default About;
