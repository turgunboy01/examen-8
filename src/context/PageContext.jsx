import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

const AllProductsProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  //   console.log(products);

  return (
    <ProductsContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default AllProductsProvider;
