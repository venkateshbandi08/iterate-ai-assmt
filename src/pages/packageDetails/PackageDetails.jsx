import React from "react";
import "./PackageDetails.css";
import { Link, useNavigate } from "react-router-dom";

const PackageDetails = () => {
  const navigate = useNavigate();
  const onClickContinue = () => {
    navigate("/puja-application");
  };
  return (
    <div className="package-details-page-container">
      <div className="puja-name-container">
        <h3>Saturday Shani Shingnapur Special Shani Saade...</h3>
        <p>Partner Puja</p>
        <p>₹ 1251</p>
      </div>
      <div className="coupon">
        <b style={{ color: "#1573DF" }}> Apply Coupon </b>
      </div>
      <div className="bill-details">
        <b>Bill details</b>
        <div className="puja-item">
          <p>Partner Puja</p>
          <p>₹ 1251.0</p>
        </div>
        <hr />
        <div className="puja-item">
          <p>Partner Puja</p>
          <p>₹ 1251.0</p>
        </div>
        <div className="pay-button">
          <div className="">
            <p>₹ 1251</p>
            <p>Partner Puja</p>
          </div>
          <div
            onClick={onClickContinue}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <p>Continue</p>
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright_arrow_white.a9b048b0.svg&w=32&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
