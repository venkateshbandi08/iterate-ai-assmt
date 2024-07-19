import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const exploreItems = [
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75",
      text: "Book Pujas at Temples",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75",
      text: "Talk to Astrologers",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75",
      text: "Offer Chadhava at Temples",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75",
      text: "Read Festival Details",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_music.b3aeb0a3.svg&w=96&q=75",
      text: "Listen to Divine Music",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75",
      text: "Do Mandir Darshan",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_sahitya.976e992d.svg&w=96&q=75",
      text: "Read Hindu Literature",
    },
    {
      image:
        "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_panchang.0458f8f4.svg&w=96&q=75",
      text: "Read Panchang",
    },
  ];
  return (
    <div className="Home-container">
      <div className="hero-section">
        <div className="pray-text-playstore-container">
          <div className="largest-app-text">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_achievement.6722fe43.webp&w=32&q=75"
              alt=""
            />
            <p>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
          </div>
          <div className="pray-text">
            <h1>
              Pray daily with{" "}
              <span style={{ color: "#F18912" }}>Sri Mandir</span>
            </h1>
            <h1>One App for all your</h1>
            <h1>devotional needs.</h1>
          </div>
          <div className="playstore-appstore">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75"
              alt=""
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1080&q=75"
            alt=""
          />
        </div>
      </div>
      <div className="explore-section">
        <h1 align="center">Explore Sri Mandir</h1>
        <div className="explore-items">
          {exploreItems.map((eachItem, index) => (
            <div className="explore-item" key={index}>
              <img src={eachItem.image} alt="" style={{ width: "90px" }} />
              <p>{eachItem.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="media-outlets">
        <h1 align="center">
          Our Divine Mission recognised by Prominent Media Outlets
        </h1>
        <div className="outlets-container">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_01.1dea7667.png&w=640&q=75"
            alt=""
          />
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_02.bddcfd94.png&w=640&q=75"
            alt=""
          />
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_03.d53d3f19.png&w=640&q=75"
            alt=""
          />
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_04.3e3537d0.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
