import React from "react";
import mainLogo from "../assets/mainLogo.png";
import nriit from "../assets/nriitLogo.png";
import saritam from "../assets/saritamLogo.png";
import tropy from "../assets/tropy.png";
import money from "../assets/money-bag.png";
import "./InfiniteCarousel.css";
import InfiniteCarousel from "./InfiniteCarousel";
import Carousel from "../reactComponents/Carousel";
import CountdownTimer from "../reactComponents/CountdownTimer";

import { Link } from "react-router-dom";

import eventcard1 from "../assets/eventcard1.png";
import eventcard2 from "../assets/eventcard2.png";
import eventcard3 from "../assets/eventcard3.png";
import eventcard4 from "../assets/eventcard4.png";
import eventcard5 from "../assets/eventcard5.png";
import Loader from "./Loader";
import usePageLoader from "./usePageLoder";

const HomePage = () => {
  const loading = usePageLoader();
  
  if (loading) return <Loader />;
  const highlights = [
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748525/img9_m41ekm.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748525/img12_ogphbg.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748525/img7_soybbt.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748525/img8_qqt6y7.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748525/img13_urxdcn.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748524/img6_mnxzfk.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748524/img3_ibs1ak.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748523/img5_vb4so1.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748523/img1_keifbu.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748523/img10_rgvkjd.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748523/img2_v87kx1.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748526/img20_flbkct.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748526/img18_q26r3b.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748526/img17_lyxvm7.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769748525/img16_r3xazo.jpg",
  ];

  const companies = [
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769776109/img57_gv3r87.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769775039/img54_evik4e.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769775038/img52_q5awft.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769775038/img53_weigpx.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769776109/img56_jcyi2f.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769776109/img58_bjay6x.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769775039/img54_evik4e.jpg",
    "https://res.cloudinary.com/dy1mv6dbq/image/upload/v1769775038/img53_weigpx.jpg",
  ];

  return (
    <div>
      <div className="logos">
        <img className="saritamlogo" src={saritam} />
        <img className="nrilogo" src={nriit} />
      </div>

      <div className="main-logo">
        <img src={mainLogo} alt="" />
      </div>
      <div className="infinite-carousel">
        <Carousel />
      </div>
      <div className="highlites">
        <div className="cp">
          <span className="tropy">
            <img src={tropy} alt="" />
          </span>
          <h1 className="event">
            40+ <span>Events</span>
          </h1>
        </div>
        <div>
          <div className="prize">
            <img src={money} alt="" />
            <span>
              <h1> Cash prize worth</h1>
              <h1>
                <span>5,00,000/-</span>
              </h1>
            </span>
          </div>
        </div>
      </div>
      <div className="button">
        <Link to={"/registration"}>
          <button className="cta-btn" id="pay-btn1">
            Register Now
            <span></span>
          </button>
        </Link>
      </div>
      <div className="about-saritam">
        <h1 className="heads">About SARITAM</h1>
        <p>
          <span className="bold-txt"> SARITAM 2K26 </span>is a vibrant two-day
          college fest organized by{" "}
          <span className="bold-txt"> NRI Institute of Technology</span>,
          bringing together creativity, talent, and innovation under one
          platform. Scheduled on{" "}
          <span className="bold-txt">February 27 and 28</span>, the fest
          provides students an opportunity to showcase their skills beyond
          academics.Featuring a wide range of technical, non-technical,
          cultural, managerial, and sports events, we encourage participation,
          teamwork, and healthy competition. From creative arts to challenging
          contests, SARITAM 2K26 aims to inspire confidence, leadership, and
          collaboration. It is more than just a fest—it is a celebration of
          ideas, enthusiasm, and student spirit.
        </p>
      </div>
      
      <div className="throwback-section">
        <h1 className="throwback-title">Throwback</h1>
        
        <div className="year-tabs">
          <div className="year-tab">2025</div>
        </div>

        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/f8pGC3J60I4?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&playlist=f8pGC3J60I4&vq=hd1080"
            title="Throwback 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ borderRadius: "20px" }}
          />
        </div>
        
        <CountdownTimer />
      </div>
      <div className="events-section">
        <h1 className="heads">Events</h1>
        <div className="e-i">
          <div className="i-card">
            <img src={eventcard1} alt="" />
            <Link to="/technicalEvents" rel="noopener noreferrer">
              <button className="view-btn">
                View <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>

          <div className="i-card">
            <img src={eventcard2} alt="" />
            <Link to={"/nonTechEvents"} rel="noopener noreferrer">
              <button className="view-btn">
                View <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div className="i-card">
            <img src={eventcard3} alt="" />
            <Link to={"/sportEvents"} rel="noopener noreferrer">
              <button className="view-btn">
                View <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div className="i-card">
            <img src={eventcard4} alt="" />
            <Link to={"/culturalEvents"} rel="noopener noreferrer">
              <button className="view-btn">
                View <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div className="i-card">
            <img src={eventcard5} alt="" />
            <Link to={"/managerialEvents"} rel="noopener noreferrer">
              <button className="view-btn">
                View <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className="heads">Collection</h1>
        <div>
          {/* RIGHT SCROLL */}
          <InfiniteCarousel items={highlights} direction="right" speed={25} />

          {/* LEFT SCROLL */}
          <InfiniteCarousel items={companies} direction="left" speed={25} />
        </div>
      </div>

      <div className="co-ord">
        <h1 className="heads"></h1>
      </div>
    </div>
  );
};

export default HomePage;
