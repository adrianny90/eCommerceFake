import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import MensClothing from "./pages/MensClothing";
import WomensClothing from "./pages/WomensClothing";
import { useFetchProducts } from "./hooks/useFetchProducts";
import { AllProductsContext } from "./pages/AllProductsContext";

function App() {
  const { products, loading, error } = useFetchProducts();
  return (
    <AllProductsContext.Provider value={{ products, loading, error }}>
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/mensclothing" element={<MensClothing />} />
            <Route path="/womensclothing" element={<WomensClothing />} />
          </Route>
        </Routes>
      </div>
    </AllProductsContext.Provider>
  );
}

export default App;
