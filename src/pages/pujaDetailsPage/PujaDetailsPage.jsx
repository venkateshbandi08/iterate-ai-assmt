import React, { useRef } from "react";
import "./PujaDetailsPage.css";
import PaymentCard from "../../components/paymentCard/PaymentCard";
import { useNavigate } from "react-router-dom";

const PujaDetailsPage = () => {
  const paymentCardsSectionRef = useRef(null);

  const paymentsList = [
    {
      amount: "₹ 851",
      color: "#f68d1c",
    },
    {
      amount: "₹ 1251",
      color: "#3568E4",
    },
    {
      amount: "₹ 2001",
      color: "#FF3201",
    },
    {
      amount: "₹ 3001",
      color: "#430ABD",
    },
  ];

  const onClickSelect = () => {
    paymentCardsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="puja-details-page-container">
      <div className="top-section">
        <div className="puja-card">
          <h2>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h2>
          <p>For Prevention of Misfortunes and Adversities</p>
          <div className="puja-itemm">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_temple.5650cd0c.svg&w=32&q=75"
              alt=""
            />
            <p>Shree Shanidev Temple, Shani Shingnapur, Maharashtra</p>
          </div>
          <div className="puja-itemm">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_date.551cae4d.svg&w=32&q=75"
              alt=""
            />
            <p>20 July, Saturday, Ashadha Shukla Chaturdashi</p>
          </div>
          <p>
            Till now2,00,000+Devoteeshave participated in Pujas conducted by Sri
            Mandir Puja Seva.
          </p>
          <button onClick={onClickSelect} className="select-puja-button">
            Select Puja Package{" "}
          </button>
        </div>
      </div>
      <div className="middle-section">
        <h2>
          Saturday Shani Shingnapur Special Shani Saade Saati Peeda Shanti
          Mahapuja and Til Tel Abhishek for Prevention of Misfortunes and
          Adversities
        </h2>
        <p>
          The Shani Shingnapur Temple in Maharashtra is considered the world's
          biggest Shani temple. This temple of Lord Shani is known as the
          'Jagrut Devasthan', meaning Shani Dev himself resides here in the form
          of a stone idol. According to religious beliefs, performing Shani Puja
          and offering Til Tel at this ancient temple can provide relief from
          the effects of Shani Saade Saati. Shani Saade Saati is often
          considered unfavourable, with its impact divided into three phases of
          two and a half years each. During the initial phase of Saade Saati,
          Shani affects the mind of an individual which may cause financial and
          emotional challenges. The second phase of Saade Saati is considered
          the most challenging which can bring physical troubles. Its
          consequences can also affect an individual's family and professional
          life.
        </p>
        <p>
          In the final phase of Shani Saade Saati, a person may face various
          struggles, affecting them physically, mentally, and financially.
          Various types of worship are performed to reduce the malefic effects
          of Lord Shani, among which Shani Saade Saati Peeda Shanti Mahapuja and
          Til Tel Abhishek are extremely effective. Just as each deity has a
          special day, Saturday is dedicated to Lord Shani, and on this day,
          performing the Shani Saade Saati Peeda Shanti Mahapuja and Til Tel
          Abhishek are considered highly fruitful. Therefore, participate in
          this puja through Sri Mandir and attain the special grace of Lord
          Shani.
        </p>
      </div>
      <h2 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        Select Puja Package
      </h2>
      <div
        className="payment-cards-section"
        id="payment-cards-section"
        ref={paymentCardsSectionRef}
      >
        {paymentsList.map((item, index) => (
          <PaymentCard key={index} details={item} />
        ))}
      </div>
    </div>
  );
};

export default PujaDetailsPage;
