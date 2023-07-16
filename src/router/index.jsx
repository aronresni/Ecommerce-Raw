import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import ShopSuplementos from "../Pages/ShopSuplementos"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/shop" element={<ShopSuplementos />} />
        </Routes>
    );
};

export default Routers;
