import React from "react";
import carousel1 from "../../assets/carousel1.jpg"


const Feature = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom " >
            <h1 className="display-4 fw-bold text-body-emphasis">Conoce la nueva linea de suplementos ENA</h1>
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grip gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button className="btn btn-primary btn-lg px-4 me-sm-3">Info</button>
                <button className="btn btn-outline-secondary btn-lg px-4">Leer Mas</button>
            </div>
        </div>

    )
}

export default Feature;