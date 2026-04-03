import React from 'react'

const Hero = () => {
  return (
    <div className="container-fluid" id="supportHero">
      <div className=" p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5   ">
        <div className="col-7   " style={{ paddingLeft: "160px" }}>
          <h1 className="fs-3">
            Search for an answer or browse help topics <br /> to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O,why is my order gitting rejected.."
          />{" "}
          <br />
          <br />
          <a href="">Track account opening</a>
          <a href="" style={{ marginLeft: "25px" }}>
            Track segment activation
          </a>
          <a href="" style={{ marginLeft: "25px" }}>
            Intraday
          </a>
          <br />
          <a href="">margins</a>
          <a href="" style={{ marginLeft: "25px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-5 " style={{ paddingLeft: "40px" }}>
          <h1 className="fs-3 ">Featured</h1>
          <ol style={{ lineHeight: "2" }}>
            <li>
              {" "}
              <a href=""> Current Takeovers and Delisting - january 2024</a>
            </li>

            <li>
              <a href=""> Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero