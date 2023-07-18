import React from 'react'

const feature = () => {
  return (
    <div className="container-fluid mt-4">
    <div className="row fully-spaced-row--medium">
      <div className="col-md-6">
        <a className="block-link" href="/collections/supplements">
          <div className="image-overlap">
            <img src="https://getrawnutrition.com/cdn/shop/files/vaughn_720x.jpg?v=1673880438" className="img-fluid alt-bg-img rounded" alt="Background Image" />
          </div>
        </a>
      </div>

      <div className="col-md-6 mt-4 align-self-center">
        <div >RAW NUTRITION</div>
        <h2>built from the ground up</h2>
        <div>
          <p>RAW Nutrition was created to provide athletes with the best fuel for peak training and performance. Our mission is to make smart nutrition easy and convenient with expertly crafted supplements made with the purest ingredients available in the industry.</p>
        </div>

        <div className="lightly-spaced-row-above">
          <a className="btn btn-primary" href="/collections/supplements">Shop Supplements</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default feature


