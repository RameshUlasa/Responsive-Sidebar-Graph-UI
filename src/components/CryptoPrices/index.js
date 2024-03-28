import React, { useState, useEffect } from "react";
import "./index.css";
import PriceItem from "../PriceItem";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);

  //API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();
        const { bpi } = data;
        setCryptoData(Object.values(bpi)); // Store price data in state array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getCurrencySymbol = (currencyCode) => {
    switch (currencyCode) {
      case "USD":
        return "$";
      case "GBP":
        return "£";
      case "EUR":
        return "€";

      default:
        return currencyCode;
    }
  };

  return (
    <div className="crypto-container">
      <h4 className="graph-head">Bitcoin Prices</h4>
      <ul className="crypto-cards-container">
        {cryptoData.map((currency) => (
          <PriceItem
            key={currency.code}
            currencyDetails={currency}
            currencySymbol={getCurrencySymbol(currency.code)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CryptoPrices;
