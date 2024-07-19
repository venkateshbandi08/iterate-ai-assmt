import React from "react";
import "./PujaBookingsPage.css";
import { Link } from "react-router-dom";

const pujaBookingsPage = () => {
  return (
    <div className="puja-bookings-page-container">
      <div className="history-option">
        <div className="history-nav">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fback_arrow.bcf3db22.svg&w=32&q=75"
            alt=""
          />
          <b>Puja History</b>
        </div>
      </div>
      <div className="bookings-container">
        <img
          src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty_stack.d683b244.svg&w=128&q=75"
          alt=""
        />
        <h2 className="">No Puja has been booked yet</h2>
        <p className="content" align="center">
          Book your Puja online at Popular Temples of India. <br /> Panditji
          will take sankalp with your name and gotra <br /> during the Puja
        </p>
        <Link to="/puja-offerings">
          <button>Book Puja Now</button>
        </Link>
      </div>
    </div>
  );
};

export default pujaBookingsPage;
