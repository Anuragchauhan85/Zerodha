import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <h3 className="fs-5" style={{ color: "#0080FF" }}>
            Brokerage calculator
          </h3>
          <ul className="text-muted" style={{ textAlign:"left", lineHeight:"2.5",fontSize:"12px" }}>
            <li>
              Call & Trade and RMS auto-sqareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹0 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              if the accoutn is in debt balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <h3 className="fs-5" style={{ color: "#0080FF" }}>
            List of charges
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage