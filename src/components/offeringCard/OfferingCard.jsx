import React from "react";
import "./OfferingCard.css";
import { useNavigate } from "react-router-dom";

const OfferingCard = () => {
  const navigate = useNavigate();
  const onClickParticipate = () => {
    navigate("/puja-details");
  };
  return (
    <div className="offering-card">
      <img
        src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720883338524.webp&w=2048&q=75"
        alt=""
        className="offering-image"
      />
      <p
        style={{
          textAlign: "center",
          marginBottom: "0.5rem",
          color: "red",
        }}
      >
        SATURDAY SHANI SHINGNAPUR SPECIAL
      </p>
      <div className="offering-content">
        <h2>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h2>
        <p>For Prevention of Misfortunes and Adversities</p>
        <div className="offering-item">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=2048&q=75"
            alt=""
          />
          <p>Shree Shanidev Temple, Shani Shingnapur, Maharashtra</p>
        </div>
        <div className="offering-item">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=2048&q=75"
            alt=""
          />
          <p>20 July, Saturday, Ashadha Shukla Chaturdashi</p>
        </div>

        <button onClick={onClickParticipate} className="participate-button">
          participate
        </button>
      </div>
    </div>
  );
};

export default OfferingCard;
