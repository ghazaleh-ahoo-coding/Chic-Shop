import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ProductsHome from "./pages/ProductsHome";
import Clothes from "./pages/Clothes";
import Cosmetics from "./pages/Cosmetics";
import ProductDetails from "./pages/ProductDetails";
import MyBag from "./pages/MyBag";
import NotFound from "./components/NotFound";


function App() {
  const [bag, setBag] = useState([]);

  return (
    <>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Products Section */}
          <Route path="products" element={<ProductsHome />}>
            <Route
              path="clothes"
              element={<Clothes bag={bag} setBag={setBag} />}
            />
            <Route
              path="cosmetics"
              element={<Cosmetics bag={bag} setBag={setBag} />}
            />
          </Route>

          {/* Product Details */}
          <Route path="products/:id" element={<ProductDetails />} />

          {/* My Bag */}
          <Route path="mybag" element={<MyBag bag={bag} setBag={setBag} />} />


          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
