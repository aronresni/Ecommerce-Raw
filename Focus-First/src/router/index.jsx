import { BrowserRouter as Router, Route, RouterProvider, Routes, useParams } from "react-router-dom";
import Landing from "../Pages/Landing";
import ShopSuplementos from "../Pages/ShopSuplementos"
import ShopClothes from "../Pages/ShopClothes";
import DetailProduct from "../Pages/DetailProduct";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const Routers = () => {

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/shopsuplementos" element={<ShopSuplementos />} />
            <Route path="/shopclothes" element={<ShopClothes />} />
            <Route path= "/producto/:id" element={<DetailProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />}
            />
        </Routes>
    );
};

export default Routers;
