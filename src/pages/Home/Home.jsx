import React from "react";
import Contact from "../../components/home/Contact";
import HomeCards from "../../components/ui/HomeCards";
import Category from "../../components/home/Category";
import Marquee from "../../components/ui/Marquee";
import News from "../../components/ui/News";
import Brend from "../../components/ui/Brend";
import CategoryTovar from "../../components/home/CategoryTovar";
import Kabinet from "../../components/ui/Kabinet";
import Accardion from "../../components/ui/Accardion";
import HomeSlide from "../../components/home/HomeSlide";
import FooterEmail from "../../components/ui/FooterEmail";
// import ZamenaModal from "../../components/modal/homeModal/ZamenaModal";
// import GarantyModal from "../../components/modal/homeModal/GarantyModal";
// import Konsultatsiya from "../../components/modal/homeModal/Konsultatsiya";
// import HelpModal from "../../components/modal/homeModal/HelpModal";
// import RequesModal from "../../components/modal/homeModal/RequesModal";

const Home = () => {
  return (
    <div>
      {/* <RequesModal /> */}
      {/* <HelpModal /> */}
      {/* <Konsultatsiya /> */}
      {/* <GarantyModal /> */}
      {/* <ZamenaModal /> */}
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
