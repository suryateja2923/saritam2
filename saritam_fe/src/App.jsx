import React, { useState, useEffect } from "react";
import saritamBg from "../src/assets/saritamBg.png";

import HomePage from "./reactComponents/HomePage";
import { Routes, Route } from "react-router-dom";
import TechnicalEvents from "./reactComponents/events/TechnicalEvents";
import NonTechEvents from "./reactComponents/events/NonTechEvents";
import "../src/reactComponents/eventPage.css";
import Footer from "./reactComponents/Footer";
import SportsEvents from "./reactComponents/events/SportsEvents";
import ManagerialEvents from "./reactComponents/events/ManagerialEvents";
import CulturalEvents from "./reactComponents/events/CulturalEvents";
import ScrollToTop from "../src/reactComponents/ScrollToTop";
import RegisterForm1 from "./reactComponents/forms/RegisterForm1";
import RegisterForm2 from "./reactComponents/forms/RegisterForm2";
import Payment from "./reactComponents/forms/Payment";
import IntroVideo from "./reactComponents/IntroVideo";
import Registration from "./reactComponents/Registration";

const App = () => {
  // 🔧 TEMPORARY: Force intro to ALWAYS show for testing
  // Set to false after video is working properly
  const FORCE_INTRO_FOR_TESTING = true;
  
  // ALWAYS show intro on first load, skip only after completion
  const [intro, setIntro] = useState(() => {
    // OVERRIDE for testing
    if (FORCE_INTRO_FOR_TESTING) {
      console.log("🔧 DEV MODE: Forcing intro video for testing");
      localStorage.removeItem("saritam_intro_completed");
      localStorage.removeItem("saritam_intro_viewed");
      return true;
    }
    
    // Check URL parameter override
    const urlParams = new URLSearchParams(window.location.search);
    const forceIntro = urlParams.get('showIntro') === 'true';
    const skipIntro = urlParams.get('skipIntro') === 'true';
    
    if (skipIntro) {
      console.log("🚫 Skipping intro via URL parameter");
      return false;
    }
    
    if (forceIntro) {
      console.log("🔧 Forcing intro via URL parameter");
      localStorage.removeItem("saritam_intro_completed");
      return true;
    }

    // Check if intro was completed (not just viewed)
    const introCompleted = localStorage.getItem("saritam_intro_completed");
    console.log("🔍 Intro completed status:", introCompleted);
    
    // Show intro if NOT completed
    const shouldShow = !introCompleted;
    console.log("➡️ Should show intro?", shouldShow);
    return shouldShow;
  });
  
  const introHandler = () => {
    console.log("✓✓✓ Intro video COMPLETED - Loading homepage...");
    // Mark intro as COMPLETED (not just viewed)
    localStorage.setItem("saritam_intro_completed", "true");
    setIntro(false);
  };

  // DEBUG: Press Ctrl+Shift+I to reset intro
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.code === "KeyI") {
        console.log("🔄 Resetting intro video...");
        localStorage.removeItem("saritam_intro_completed");
        localStorage.removeItem("saritam_intro_viewed");
        window.location.reload();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  
  console.log("=== APP RENDER ===");
  console.log("Intro state:", intro);
  console.log("Should show IntroVideo?", intro);
  
  return (
    <>
      {intro ? (
        <>
          <IntroVideo finishIntro={introHandler} />
        </>
      ) : (
        <div>
          <div className="image-container">
            <img src={saritamBg} alt="" />
          </div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technicalEvents" element={<TechnicalEvents />} />
            <Route path="/nonTechEvents" element={<NonTechEvents />} />
            <Route path="/sportEvents" element={<SportsEvents />} />
            <Route path="/managerialEvents" element={<ManagerialEvents />} />
            <Route path="/culturalEvents" element={<CulturalEvents />} />
            <Route path="/register/step1" element={<RegisterForm1 />} />
            <Route path="/register/step2" element={<RegisterForm2 />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="*"
              element={<h1 style={{ textAlign: "center" }}>Page Not Found</h1>}
            />
          </Routes>
          <div className="ftr">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
