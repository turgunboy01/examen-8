import React from "react";
import Contact from "../../components/home/Contact";
import Accardion from "../../components/ui/Accardion";
import News from "../../components/ui/News";
import HomeCards from "../../components/ui/HomeCards";
import CategoryTovar from "../../components/home/CategoryTovar";
import Proizvaditel from "../../components/Proizvaditel/Proizvaditel";

const ProizvaditelPage = () => {
  return (
    <div>
      <Proizvaditel />
      <CategoryTovar />
      <HomeCards />
      <News />
      <Accardion />
      <Contact />
    </div>
  );
};

export default ProizvaditelPage;
