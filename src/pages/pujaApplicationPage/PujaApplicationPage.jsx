import React, { useState } from "react";
import "./PujaApplicationPage.css";

const PujaApplicationPage = () => {
  const [firstName, setFirstName] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (firstName) {
      alert("success");
    } else {
      alert("Enter details");
    }
  };
  return (
    <form onSubmit={onSubmitForm} className="puja-application-container">
      <div className="form-item">
        <h3>Your WhatsApp Number</h3>
        <p>
          Your Puja booking updates like Puja Photos, Videos and other details
          will be sent on WhatsApp on below number.
        </p>
        <input type="text" placeholder="Enter what's app number" />
      </div>
      <hr
        style={{
          height: "5px",
          backgroundColor: "lightgray",
          marginTop: "1rem",
        }}
      />
      <div className="form-item">
        <h3>Name of members participating in Puja</h3>
        <p>Panditji will take this name along with gotra during the puja.</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <input
            style={{ width: "300px" }}
            type="text"
            placeholder="First member name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            style={{ width: "300px" }}
            type="text"
            placeholder="Second member name"
          />
        </div>
      </div>
      <hr
        style={{
          height: "5px",
          backgroundColor: "lightgray",
          marginTop: "1rem",
        }}
      />
      <div className="form-item">
        <h3>Fill participant’s gotra</h3>
        <p>Gotra will be recited during the puja.</p>
        <input type="text" placeholder="Gotra" />
      </div>
      <hr
        style={{
          height: "5px",
          backgroundColor: "lightgray",
          marginTop: "1rem",
        }}
      />
      <div className="form-item">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Do you want to get puja prasad?</h3>
          <div
            style={{
              marginLeft: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
            className=""
          >
            <button className="prasad-btn">Yes</button>
            <button className="prasad-btn">No</button>
          </div>
        </div>
        <p>
          Prasad of workship will be sent within 8-10 days after completion of
          puja
        </p>
      </div>
      <button
        style={{
          backgroundColor: firstName ? "#00bd68" : "",
          color: firstName ? "white" : "",
        }}
        type="submit"
        className="proceed-btn"
      >
        Proceed To Book
      </button>
    </form>
  );
};

export default PujaApplicationPage;
