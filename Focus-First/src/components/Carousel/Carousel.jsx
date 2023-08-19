import React from 'react';
const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item" data-bs-interval="10000">
          <img src="https://images.unsplash.com/photo-1584464259191-7be140d0937b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 c-img opacity-50" alt="..." />
          <div className="carousel-caption top-0 mt-4  d-md-block">
            <p className='mt-5 fs-3 text-uppercase d-none d-md-block'>Your Ultimate Fitness Gear and Supplement Source</p>
            <h2 className='display-1 fw-bolder text-capitalize'>Welcome to RAW</h2>
            <button className='mt-5 m-2'>About Us</button>
            <button className='mt-5 m-2'>Shop Now</button>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="2000">
          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 c-img opacity-50" alt="..." />
          <div className="carousel-caption top-0 mt-4  d-md-block">
            <p className='mt-5 fs-3 text-uppercase d-none d-md-block'>Discover the latest trends in athletic wear at RAW</p>
            <h2 className='display-1 fw-bolder text-capitalize'>About Apparel</h2>
            <button className='mt-5'>Shop Apparel Now</button>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100 c-img opacity-50" alt="..." />
          <div className="carousel-caption top-0 mt-4  d-md-block">
            <p className='mt-5 fs-3 text-uppercase d-none d-md-block'>Elevate Your Results with RAW Premiun Supplements</p>
            <h2 className='display-1 fw-bolder text-capitalize'>About Supplements</h2>
            <button className="mt-5">Shop Supplements Now</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
