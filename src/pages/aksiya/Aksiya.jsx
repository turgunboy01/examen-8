import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import Product from "../../components/ui/Product";

import img1 from "../../assets/home/category1.png";
import img2 from "../../assets/home/category2.png";
import img3 from "../../assets/home/category3.png";
import img4 from "../../assets/home/category4.png";
import img5 from "../../assets/home/category5.png";
import Kabinet from "../../components/ui/Kabinet";
import Popular from "../../components/ui/Popular";
import Brend from "../../components/ui/Brend";
import Contact from "../../components/home/Contact";
import Aksiya from "../../components/aksiya/Aksiya";
import FooterEmail from "../../components/ui/FooterEmail";



const AksiyaPage = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <Aksiya />
      <Kabinet />
      <Popular />
      <Brend />
      <Contact />
      <FooterEmail />
    </div>
  );
};

export default AksiyaPage;
