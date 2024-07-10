import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SravneniePage from "./pages/sravnenie/Sravnenie";
import ScrollToTop from "./components/ScrollToTop";
import LoadingImg from "./assets/rolling.gif";
import {
  About,
  AksiyaPage,
  BlogPage,
  Card,
  ContactPage,
  CountryBrendPage,
  CountryKabinetPodKluch,
  DostavkaPage,
  FaqPage,
  Footer,
  GarantyPage,
  Header,
  Home,
  KabinetPage,
  Katalog,
  KategoryPage,
  KobinetPodKluchPage,
  OplataPage,
  OtzivPage,
  ProductDetailsPage,
  ProizvaditelPage,
  SertifikatPage,
  StatyaPage,
  UslugiPage,
  VakansyPage,
  WishlistPage,
} from "./pages";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#f8f7f3] flex justify-center items-center h-screen">
        <img src={LoadingImg} alt="" />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Header />
      <ScrollToTop />
      <div className="pt-[140px] sm:pt-[200px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/dostavka" element={<DostavkaPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/uslugi" element={<UslugiPage />} />
          <Route path="/statya" element={<StatyaPage />} />
          <Route path="/oplata" element={<OplataPage />} />
          <Route path="/countryBrend" element={<CountryBrendPage />} />
          <Route
            path="/kabinetPodKluch/:id"
            element={<CountryKabinetPodKluch />}
          />
          <Route path="/garanty" element={<GarantyPage />} />
          <Route path="/otziv" element={<OtzivPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/aksiya" element={<AksiyaPage />} />
          <Route path="/podkluch" element={<KobinetPodKluchPage />} />
          <Route path="/proizvaditel" element={<ProizvaditelPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/sertifat" element={<SertifikatPage />} />
          <Route path="/vakansy" element={<VakansyPage />} />
          <Route path="/sravnenie" element={<SravneniePage />} />
          <Route path="/cart" element={<Card />} />
          <Route path="/profile" element={<KabinetPage />} />
          <Route path="/kategory/:caategory" element={<KategoryPage />} />
        </Routes>
      </div>
      <Footer />
      {/* <Test /> */}
    </div>
  );
};

export default App;
