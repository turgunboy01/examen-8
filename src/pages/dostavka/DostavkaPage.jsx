import React from "react";
import Dostavka from "../../components/dostavka/Dostavka";
import Hero from "../../components/dostavka/Hero";
import Udovno from "../../components/ui/Udovno";
import Accardion from "../../components/ui/Accardion";
import Contact from "../../components/home/Contact";
import News from "../../components/ui/News";
import FooterEmail from "../../components/ui/FooterEmail";

const DostavkaPage = () => {
  return (
    <div>
      <Hero />
      <Udovno />
      <Accardion />
      <Dostavka />
      <FooterEmail />
    </div>
  );
};

export default DostavkaPage;
