import React from "react";
import Contact from "../../components/home/Contact";
import Accardion from "../../components/ui/Accardion";
import Brend from "../../components/ui/Brend";
import CountryBrend from "../../components/CountryBrend/CountryBrend";
import ProductFilterPage from "../../components/ProductFilterPage";

const CountryBrendPage = () => {
  return (
    <div>
      <CountryBrend />
      <ProductFilterPage />
      <Brend />
      <Accardion />
      <Contact />
    </div>
  );
};

export default CountryBrendPage;
