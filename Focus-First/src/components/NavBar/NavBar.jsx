import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                   
                    <a className="navbar-brand" href="/home">
                        <img src="https://getrawnutrition.com/cdn/shop/files/RAW-Logos-01_200x.png?v=1660529628" className="w-200" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fs-4 fw-semibold" href="/shopsuplementos">Supplements</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-4 fw-semibold" href="/shopclothes" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Apparel
                                </a>
                                <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">All Apparel</a>
                                    <a className="dropdown-item" href="#">T-shirt</a>
                                    <a className="dropdown-item" href="#">Gap</a>
                                    <a className="dropdown-item" href="#">Accesories</a>
                                    <a className="dropdown-item" href="#">Shorts</a>
                                    <a className="dropdown-item" href="#">Socks</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-4 fw-semibold" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-4 fw-semibold" href="#">Contact</a>
                            </li>
                            <li className="fs-2 fw-semibold"><CartWidget /></li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    );
};

export default NavBar;
