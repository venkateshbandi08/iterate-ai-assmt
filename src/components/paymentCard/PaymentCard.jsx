import React, { useState } from "react";
import ReactModal from "react-modal";
import "./PaymentCard.css";
import { useNavigate } from "react-router-dom";

ReactModal.setAppElement("#root");

const PaymentCard = ({ details }) => {
  const { color } = details;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const onClickNext = () => {
    navigate("/package-details");
  };

  return (
    <>
      <div className="payment-card" style={{ borderColor: `${color}` }}>
        <div className="package-container">
          <h2>{details.amount}</h2>
          <p>Individual Puja</p>
          <p>Package for 1 Person</p>
        </div>
        <hr />
        <br />
        <ul className="package-info">
          <li>
            Pandit ji will call out your name and gotra during the puja sankalp.
          </li>
          <li>
            Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva,
            or Deep Daan to be done in your name.
          </li>
          <li>
            Upon completion, a video of your puja and offering will be shared
            with you on your registered WhatsApp number or can be found in your
            booking history within 3-4 days.
          </li>
          <li>
            Sacred Tirth Prasad will be sent to your address within 8-10 days.
          </li>
        </ul>
        <br />
        <hr />
        <div className="btn-container">
          <button className="participate-button" onClick={handleShow}>
            Participate
          </button>
        </div>
      </div>

      <ReactModal
        isOpen={show}
        onRequestClose={handleClose}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="popup-content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Fill your details for Puja</h3>
            <button className="into-button" onClick={handleClose}>
              X
            </button>
          </div>
          <hr />
          <p>Enter Your Whatsapp Mobile Number</p>
          <p>
            Your Puja booking updates like Puja Photos, Videos and other details
            will be sent on WhatsApp on below number.
          </p>
          <input type="text" placeholder="Enter what'app number" />
          <p>Enter your name </p>
          <input type="text" placeholder="Enter your name" />
          <button onClick={onClickNext} className="next-button">
            Next
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default PaymentCard;
