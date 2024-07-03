import React from "react";
import Contact from "../../components/home/Contact";
import HomeCards from "../../components/ui/HomeCards";
import Category from "../../components/home/Category";
import Marquee from "../../components/ui/Marquee";
// import { Brend } from "../../components/home/Brend";
import News from "../../components/ui/News";
import Brend from "../../components/ui/Brend";
import CategoryTovar from "../../components/home/CategoryTovar";
import Kabinet from "../../components/ui/Kabinet";
import Accardion from "../../components/ui/Accardion";
import HomeSlide from "../../components/home/HomeSlide";
import FooterEmail from "../../components/ui/FooterEmail";

const Home = () => {
  return (
    <div>
      <HomeSlide />
      <Category />
      <Kabinet />
      <HomeCards />
      <CategoryTovar />
      <Marquee />
      <Brend />
      <Accardion />
      <News />
      <Contact />
      <FooterEmail />
    </div>
  );
};

export default Home;
