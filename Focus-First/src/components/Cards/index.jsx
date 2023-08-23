import React from 'react';
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div className='container mt-5'>
            <h2>Categories of products</h2>
            <div className='row mt-3'>
                <div className='col-md-6 col-lg-3'>
                    <Link to="/shopclothes">
                        <div className='mb-3  w-16 h-16 md:w-24 md:h-24'>

                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A1306_460x.jpg?v=1683553611"
                                className="img-fluid rounded object-cover w-full h-full"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Supplement</h2>

                        </div>
                    </Link>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <Link to="/shopclothes">
                        <div className='mb-3  w-16 h-16 md:w-24 md:h-24'>

                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/10_720x.jpg?v=1658893164"
                                className="img-fluid rounded object-cover w-full h-full"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Apparel</h2>

                        </div>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default Cards;
