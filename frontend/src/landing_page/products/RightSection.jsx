import React from 'react'

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
 
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-6 " style={{ paddingLeft: "50px" }}>
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection