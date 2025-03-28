import { createContext, useContext } from "react";

const AllProductsContext = createContext();

const useAllProducts = () => {
  const context = useContext(AllProductsContext);

  if (!context) {
    throw new Error(
      "useAllProducts must be used within an AllProductsContext.Provider"
    );
  }
  return context;
};

export { AllProductsContext, useAllProducts };
