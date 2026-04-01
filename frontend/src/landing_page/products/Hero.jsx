import React from 'react'

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className=" text-center mt-5 p-3">
        <h1>Technology</h1>
        <h3 className="text-muted mt-4 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className=" mt-4 mb-5">
          Check out our{" "}
          <a href=" " style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero