import React from 'react';

const Cards = () => {
    return (
        <div className='container mt-5'>
            <h2>Supplements Categories</h2>
            <div className='row'>
                <div className='col-md-4 col-sm-6'>
                    <a href=''>
                        <div className='mb-3 hover'>

                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A2900_720x.jpg?v=1680710962"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                            <h2 className='text-dark align-center'>Protein</h2>

                        </div>
                    </a>
                </div>
                <div className='col-md-4 col-sm-6'>
                    <a href=''>
                        <div className='mb-3 hover'>
                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/Sour_AF_Pre_Web_-_Vertical_copy_720x.png?v=1664390275"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                        </div>
                    </a>
                </div>
                <div className='col-md-4 col-sm-6'>
                    <a href=''>
                        <div className='mb-3 hover'>
                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/BM9A2913_720x.jpg?v=1680710891"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"
                            />
                        </div>
                    </a>
                </div>
                <div className='col-md-4 col-sm-6'>
                    <a href=''>
                        <div className='mb-3 hover'>
                            <img
                                src="https://getrawnutrition.com/cdn/shop/files/RAW-19_720x.jpg?v=1684938793"
                                className="img-fluid rounded vh"
                                alt="Pre-Workout"

                            />

                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
