import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import ShopSuplementos from "../Pages/ShopSuplementos"
import ShopClothes from "../Pages/ShopClothes";
import DetailProduct from "../Pages/DetailProduct";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import CartConntextProvider from "../state/cart.context"
import Form from "../Pages/Form";

const Routers = () => {

    return (
        <CartConntextProvider>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/shopsuplementos" element={<ShopSuplementos />} />
                <Route path="/shopclothes" element={<ShopClothes />} />
                <Route path="/producto/:id" element={<DetailProduct />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </CartConntextProvider>
    );
};

export default Routers;
