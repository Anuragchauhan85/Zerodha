import React from 'react'

const LeftSection = ({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p >{productDescription}</p>
          <div className="mt-4">
            <a href={tryDemo} style={{ textDecoration:"none" }}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "55px", textDecoration:"none"}}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{ marginLeft: "10px" }}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection