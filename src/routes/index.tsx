import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Errors";
import Pages from "../pages";
import Cart from "@/pages/Cart";
import Product from "@/pages/Product";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Router() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for errors */}
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default Router;
