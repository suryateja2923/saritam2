import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import eventsData from "./eventsData";

const RegisterForm2 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = location.state;

  useEffect(() => {
    if (!userData) {
      navigate("/register/step1");
    }
  }, [userData, navigate]);

  const [selectedEvents, setSelectedEvents] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (eventName) => {
    setSelectedEvents((prev) =>
      prev.includes(eventName)
        ? prev.filter((e) => e !== eventName)
        : [...prev, eventName],
    );
  };

  const price =
    selectedEvents.length === 0 ? 0 : selectedEvents.length === 1 ? 299 : 399;

  const handlePayment = () => {
    if (!userData) return;

    if (selectedEvents.length === 0) {
      setError("Select at least one event");
      return;
    }

    setError("");

    const payload = {
      ...userData,
      events: selectedEvents,
      amount: price,
    };
    console.log("Payload to send:", payload);
    navigate("/payment", { state: payload });

    console.log(payload);

    // 👉 Payment Gateway integration here
    console.log("User Data:", userData);
    console.log("Selected Events:", selectedEvents);
    console.log("Amount:", price);
  };

  return (
    <div className="event-form-wrapper">
      <div className="event-form">
        <h1>Select Your Events</h1>

        {Object.entries(eventsData).map(([category, events]) => (
          <div key={category} className="event-category">
            <h2>{category}</h2>
            <div className="event-grid">
              {events.map((event) => (
                <label key={event} className="event-card">
                  <input type="checkbox" onChange={() => handleChange(event)} />
                  <span>{event}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <div className="price-box">
          <h3>Total Price</h3>
          <p>₹ {price}</p>
        </div>

        <button onClick={handlePayment}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default RegisterForm2;
