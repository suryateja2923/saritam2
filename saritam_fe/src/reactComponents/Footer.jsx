import React from "react";
import saritam from "../assets/saritamLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-se">
        {/* LEFT SECTION - Logo and Social */}
        <div className="col col-left">
          <img src={saritam} alt="SARITAM Logo" className="footer-logo" />
          <h2>FOLLOW US ON :</h2>
          <div className="social-i">
            <a
              href="https://instagram.com/nriitgunturofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/919701732605"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nriitgunturofficial?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION - Contact */}
        <div className="col col-middle">
          <h2>CONTACT US :</h2>
          <div className="cts">
            <div className="contact-item">
              <h2>📧 Email</h2>
              <a href="mailto:saritam@nriit.edu.in">saritam@nriit.edu.in</a>
            </div>
            <div className="contact-item">
              <h2>MRS B. SOWJANYA</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: '2px 0' }}>Convener, HOD - IT</p>
              <a href="tel:+917013437507">+91 7013437507</a>
            </div>
            <div className="contact-item">
              <h2>Dr. K. SRINIVAS RAO</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: '2px 0' }}>Co-Convener, HOD - S&H</p>
              <a href="tel:+919491337527">+91 9491337527</a>
            </div>
            <div className="contact-item">
              <h2>Prof B SAIDAIAH</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: '2px 0' }}>ECE Co-Convener</p>
              <a href="tel:+919885237484">+91 9885237484</a>
            </div>
            <div className="contact-item">
              <h2>MRS P.RAVI KUMAR</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: '2px 0' }}> DIPLOMA PRINCIPLE CO-CONVENER

 </p>
              <a href="tel:+919248755774">+91 9248755774</a>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Location */}
        <div className="col col-right">
          <h2>LOCATION :</h2>
          <div className="location-info">
            <p>
              <i className="fa-solid fa-map-pin"></i>
              NRI INSTITUTE OF TECHNOLOGY, VIJAYAWADA, ANDHRA PRADESH - 521213
            </p>
            <a
              href="https://www.google.com/maps/place/NRI+Institute+of+Technology/@16.3416969,80.1699127,12z/data=!4m6!3m5!1s0x3a3589b4a98f3ffd:0x18215cdb4a71f7c6!8m2!3d16.3416969!4d80.322348!16s%2Fg%2F1hm4c0xsw?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              VIEW ON GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
