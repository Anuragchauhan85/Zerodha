import React from 'react'

const Stats = () => {
  return (
    <div className="container p-5 ">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5 <br />
            lakh crores worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmiks, spam, "gamification", or annoying push <br />{" "}
            notifications. High quality apps that you use at your pace, <br />{" "}
            the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. out investment <br /> in 30+
            fintech startups offer you tailored services specific <br /> to your
            needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and kill Switch, we don't just <br />{" "}
            faciliate transactions, but actively help you do better with <br />{" "}
            your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media\images\ecosystem.png"
            alt="ecosystem"
            style={{ width: "100%" }}
          />
          <div className="text-center mt-1">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href=" " style={{ textDecoration: "none" }}>
              Try kite Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats