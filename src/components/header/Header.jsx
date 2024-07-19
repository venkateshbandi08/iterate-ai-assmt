import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const profileOptionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileOptionsRef.current &&
        !profileOptionsRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOptionsRef]);

  return (
    <>
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_sm_logo_en_dark.749d0244.svg&w=256&q=75"
            alt="logo"
          />
        </Link>
        <ul className="navigation-options-container">
          <li>Home</li>
          <li>Puja</li>
          <li>Panchang</li>
          <li>Temples</li>
          <li>Library</li>
        </ul>
        <div className="language-tab-and-profile-container">
          <select id="">
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
          </select>
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDefault%20Profile.619cb564.svg&w=48&q=75"
            alt="profile"
            className="profile-icon"
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
        {show && (
          <div className="profile-options" ref={profileOptionsRef}>
            <div className="profile-welcome-text">
              <b>Hello, Sri Mandir Bhakt</b>
              <p>Welcome to Sri Mandir Puja Seva</p>
            </div>
            <hr />
            <div className="account-details-section">
              <p
                style={{
                  marginBottom: "-0.5rem",
                  color: "#74787d",
                  fontSize: "14px",
                }}
              >
                Account Details
              </p>
              <Link
                to="/"
                className="account-detail-item"
                style={{ textDecoration: "none" }}
                onClick={() => setShow(false)}
              >
                <div className="detail-icon-and-name">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_user_profile.a4a5bb8b.svg&w=32&q=75"
                    alt=""
                  />
                  <p style={{ color: "black", textDecoration: "none" }}>
                    My Profile
                  </p>
                </div>
                <div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    alt=""
                  />
                </div>
              </Link>
              <Link
                to="/puja-bookings"
                className="account-detail-item"
                style={{ textDecoration: "none" }}
                onClick={() => setShow(false)}
              >
                <div className="detail-icon-and-name">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_history.69f033dd.svg&w=32&q=75"
                    alt=""
                  />
                  <p style={{ color: "black", textDecoration: "none" }}>
                    My Puja Bookings
                  </p>
                </div>
                <div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    alt=""
                  />
                </div>
              </Link>
              <div className="account-detail-item">
                <div className="detail-icon-and-name">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_history.69f033dd.svg&w=32&q=75"
                    alt=""
                  />
                  <p>My Ramotsav Bookings</p>
                </div>
                <div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    alt=""
                  />
                </div>
              </div>
              <div className="account-detail-item">
                <div className="detail-icon-and-name">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_explore_puja_seva.42f2f767.svg&w=32&q=75"
                    alt=""
                  />
                  <p>Book a Puja</p>
                </div>
                <div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="help-support-section">
              <p
                style={{
                  color: "#74787d",
                  fontSize: "14px",
                }}
              >
                Help & Support for puja Booking
              </p>
              <div className="support-items">
                <div className="support-item">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_call.858e9981.svg&w=32&q=75"
                    alt=""
                  />
                  <div className="support-content">
                    <b style={{ fontSize: "14px" }}>12-34-56547</b>
                    <p style={{ fontSize: "10px" }}>
                      You can call us from 10:30AM - 07:30PM
                    </p>
                  </div>
                </div>
                <div className="bottom-support-container">
                  <div className="support-item">
                    <img
                      src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_mail.adf10861.svg&w=32&q=75"
                      alt=""
                    />
                    <div className="support-content">
                      <b style={{ fontSize: "14px" }}>Email us</b>
                    </div>
                  </div>
                  <div className="support-item">
                    <img
                      src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_whats_app.97e1ae15.svg&w=32&q=75"
                      alt=""
                    />
                    <div className="support-content">
                      <b style={{ fontSize: "14px" }}>What'sapp us</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
