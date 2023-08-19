import React from 'react';
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div className='container mt-5'>
            <h2>Supplements Categories</h2>
            <div className='row mt-3'>
                <div className='col-md-6 col-lg-3'>
                    <Link to="/shopclothes">
                        <div className='mb-3 hover'>
                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A2900_720x.jpg?v=1680710962"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Protein</h2>
                        </div>
                    </Link>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <Link to="/shopclothes">
                        <div className='mb-3 hover'>

                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A2900_720x.jpg?v=1680710962"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Protein</h2>

                        </div>
                    </Link>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <Link to="/shopclothes">
                        <div className='mb-3 hover'>

                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A2900_720x.jpg?v=1680710962"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Protein</h2>

                        </div>
                    </Link>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <Link to="/shopclothes">
                        <div className='mb-3 hover'>

                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A2900_720x.jpg?v=1680710962"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Protein</h2>

                        </div>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default Cards;
