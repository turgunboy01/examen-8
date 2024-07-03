import React from "react";
import Contact from "../../components/home/Contact";
import Accardion from "../../components/ui/Accardion";
import HomeCards from "../../components/ui/HomeCards";
import PodKluch from "../../components/KobinetPodKluch/PodKluch";
import FooterEmail from "../../components/ui/FooterEmail";
import PodkluchCom from "../../components/podkluch/PodkluchCom";

const KobinetPodKluchPage = () => {
  return (
    <div>
      <PodKluch />
      <HomeCards />
    <PodkluchCom/>
      <Accardion />
      <Contact />
      <FooterEmail />
    </div>
  );
};

export default KobinetPodKluchPage;
