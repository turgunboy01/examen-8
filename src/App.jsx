import React from "react";
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
// import Test from "./Test";

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <div className="pt-[140px] sm:pt-[200px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/dostavka" element={<DostavkaPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductDetailsPage />} />
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
        </Routes>
      </div>

      <Footer />
      {/* <Test /> */}
    </div>
  );
};

export default App;
