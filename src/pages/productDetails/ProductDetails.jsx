import React from "react";
import CategoryTovar from "../../components/home/CategoryTovar";
import Kabinet from "../../components/ui/Kabinet";
import Brend from "../../components/ui/Brend";
import Popular from "../../components/ui/Popular";
import Sertificat from "../../components/ui/Sertificat";
import ProductDetails from "../../components/productDetails/ProductDetails";
import Camentary from "../../components/productDetails/Camentary";

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetails />
      <Camentary />
      <CategoryTovar />
      <Kabinet />
      <Popular />
      <Brend />
    </div>
  );
};

export default ProductDetailsPage;
