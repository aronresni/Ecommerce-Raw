// ProductCarousel.js
import React from 'react';

const ProductCarousel = ({ images }) => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {images.map((imageUrl, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={imageUrl} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>

            </a>
        </div>
    );
};

export default ProductCarousel;
