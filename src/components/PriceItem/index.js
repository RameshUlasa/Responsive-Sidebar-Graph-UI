import React from "react";
import "./index.css";

const PriceItem = ({ currencyDetails, currencySymbol }) => {
  const { rate, description, code } = currencyDetails;

  return (
    <li className="price-item">
      <div className="rate-card">
        <p className="code">{code}</p>
        <p className="rate">
          {currencySymbol} {rate}
        </p>
      </div>
      <div className="code-card">
        <p className="des">{description}</p>
        <button className="trade-btn">Trade</button>
      </div>
    </li>
  );
};

export default PriceItem;
