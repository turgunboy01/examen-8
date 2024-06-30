import React from "react";
import Kabinet from "../../components/ui/Kabinet";
import Category from "../../components/home/Category";
import CategoryTovar from "../../components/home/CategoryTovar";
import HomeCards from "../../components/ui/HomeCards";
import Brend from "../../components/ui/Brend";
import News from "../../components/ui/News";
import Accardion from "../../components/ui/Accardion";
import Contact from "../../components/home/Contact";

const Katalog = () => {
  return (
    <div className="">
      <Kabinet />
      <HomeCards />
      <CategoryTovar />
      <Brend />
      <News />
      <Accardion />
      <Contact />
    </div>
  );
};

export default Katalog;
