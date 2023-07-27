import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/footer";
import NavBar from "../components/NavBar/NavBar";
import Feature from "../components/feature/feature"
import Cards from "../components/Cards/index";

const Landing = () => {

    return (
        <div>
            <NavBar />
            <Carousel/>  
            <Cards/>          
            <Feature/>
            <Footer />

        </div>
    )
}

export default Landing;