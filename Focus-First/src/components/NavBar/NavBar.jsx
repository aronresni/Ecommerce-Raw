import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <a className="navbar-brand " href="/home">
                        <img src="https://getrawnutrition.com/cdn/shop/files/RAW-Logos-01_200x.png?v=1660529628" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fs-4 fw-semibold" href="/shopsuplementos">Supplements</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link fs-4 fw-semibold" href="/shopclothes">Apparel</a>
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
