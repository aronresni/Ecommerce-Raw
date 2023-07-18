import { BrowserRouter as Router, Route, RouterProvider, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import ShopSuplementos from "../Pages/ShopSuplementos"
import ShopClothes from "../Pages/ShopClothes";
import DetailProduct from "../Pages/DetailProduct";

const Routers = () => {
    return (
        <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/shopsuplementos" element={<ShopSuplementos />} />
            <Route path="/shopclothes" element={<ShopClothes />} />
            <Route path="/shopdetail" element={<DetailProduct />} />
        </Routes>
    );
};

export default Routers;
