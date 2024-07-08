import React, { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Katalog from "./pages/katalog/Katalog";
import ProductDetailsPage from "./pages/productDetails/ProductDetails";
import About from "./pages/about/About";
import DostavkaPage from "./pages/dostavka/DostavkaPage";
import UslugiPage from "./pages/uslugi/Uslugi";
import StatyaPage from "./pages/statya/Statya";
import OplataPage from "./pages/oplata/OplataPage";
import CountryBrendPage from "./pages/countryBrend/CountryBrendPage";
import GarantyPage from "./pages/garanty/GarantyPage";
import OtzivPage from "./pages/otzivi/OtzivPage";
import BlogPage from "./pages/blog/BlogPage";
import AksiyaPage from "./pages/aksiya/Aksiya";
import CountryKabinetPodKluch from "./pages/cobinetPodKluch/KobinetPodKluch";
import KobinetPodKluchPage from "./pages/KobinetPobKluch/KobinetPobKluchPage";
import ProizvaditelPage from "./pages/proizvaditel/Proizvaditel";
import ContactPage from "./pages/Contact/ContactPage";
import WishlistPage from "./pages/wishlist/WishlistPage";
import FaqPage from "./pages/faq/Faq";
import VakansyPage from "./pages/vakansy/Vakansy";
import SertifikatPage from "./pages/sertifikat/SertifikatPage";
import SravneniePage from "./pages/sravnenie/Sravnenie";
import ScrollToTop from "./components/ScrollToTop";
import Card from "./pages/cart/Card";
// import Kabinet from "./components/ui/Kabinet";
import KabinetPage from "./pages/kabinet/KabinetPage";
import KategoryPage from "./pages/kategory/KategoryPage";
// import Test from "./Test";
import LoadingImg from "./assets/rolling.gif";
import Modal from "./components/modal/auth/Modal";
import { ModalContext } from "./context/modal/ModalContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { regModal, setRegModal } = useContext(ModalContext);

  useEffect(() => {
    const registrationData = localStorage.getItem("registrationData");
    setRegModal(!registrationData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setRegModal]);

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
      {regModal && <Modal />}
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
