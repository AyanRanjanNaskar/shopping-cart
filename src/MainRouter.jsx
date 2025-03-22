import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter;