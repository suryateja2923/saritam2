import { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Registration() {
  const navigate = useNavigate();

  /* ================= USER DETAILS ================= */
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    branch: "",
    stream: "",
    year: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= CATEGORY & EVENTS ================= */
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const toggleEvent = (eventName) => {
    setSelectedEvents((prev) =>
      prev.includes(eventName)
        ? prev.filter((e) => e !== eventName)
        : [...prev, eventName],
    );
  };

  const removeEvent = (eventName) => {
    setSelectedEvents((prev) => prev.filter((e) => e !== eventName));
  };

  /* ================= EVENT LIST ================= */
  const events = {
    tech: [
      "Paper Presentation",
      "Poster Presentation",
      "Project Expo",
      "Tech Quiz",
    ],
    nontech: [
      "Style War (Fashion Show)",
      "Short Film",
      "Painting",
      "Insta Reels",
      "Poetry",
      "Face Painting",
    ],
    mgmt: ["Young Manager", "Business Quiz", "Business Plan", "Market Makers"],
    cult: [
      "Solo Dance",
      "Group Dance",
      "Singing Solo",
      "Singing Group",
      "Theatre Show (Skit)",
      "Instrumental",
      "Mime",
      "Mimicry",
    ],
    sports: [
      "Volleyball (Men)",
      "Kabaddi (Men & Women)",
      "Throw Ball (Women)",
      "Cricket (Men)",
      "Discus Throw",
      "Shot Put",
      "Kho-Kho",
      "Chess",
    ],
  };

  /* ================= YEAR LOGIC ================= */
  const getYears = () => {
    if (!user.stream) return [];

    if (user.stream === "B.Tech") {
      return ["Year 1", "Year 2", "Year 3", "Year 4"];
    }

    if (user.stream === "Diploma") {
      return ["Year 1", "Year 2", "Year 3"];
    }

    if (user.stream === "MCA" || user.stream === "MBA") {
      return ["Year 1", "Year 2"];
    }

    return [];
  };

  /* ================= PRICE ================= */
  const price =
    selectedEvents.length === 0 ? 0 : selectedEvents.length === 1 ? 299 : 399;

  /* ================= PAYMENT ENABLE ================= */
  const canPay =
    selectedEvents.length > 0 &&
    user.name &&
    user.email &&
    user.mobile &&
    user.college &&
    user.branch &&
    user.stream &&
    user.year;

  /* ================= HANDLE PAYMENT ================= */
  const handlePayment = async () => {
    if (!canPay) return;

    try {
      // Create order from backend
      const orderRes = await API.post("/create-order", {
        amount: price,
      });

      const order = orderRes.data;

      // Get Razorpay key
      const keyRes = await API.get("/getKey");
      const key = keyRes.data;

      // Razorpay options
      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "College Fest - SARITAM",
        description: "Event Registration",
        order_id: order.id,

        handler: async function (response) {
          console.log(response);
          // Verify payment
          const verifyRes = await API.post("/verifyPayment", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userData: { ...user, events: selectedEvents, amount: price },
          });
          console.log(verifyRes.data);
          navigate("/");
        },

        prefill: {
          name: user.name,
          email: user.email,
          contact: user.mobile,
        },

        theme: { color: "#2bffc6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initialization failed");
    }
  };

  /* ================= UI ================= */
  return (
    <div className="container">
      {/* HEADER */}
      <div className="header">
        <h1>SARITAM – Event Registration</h1>
        <p>Select events to unlock payment</p>
      </div>

      <div className="instruction-box">
        <h3>Participant Details – Important Instructions</h3>
        <p>
          Please enter your personal details carefully and accurately. The
          information provided here will be used for certificate generation and
          official communication.
        </p>

        <ul>
          <li>
            <strong>Full Name</strong> must match exactly how it should appear
            on your certificate and e-certificate.
          </li>
          <li>
            <strong>Email ID</strong> should be active and correct, as all
            certificates and updates will be sent to this email.
          </li>
          <li>
            <strong>Mobile Number</strong> will be used for event coordination.
          </li>
          <li>
            <strong>Academic details</strong> (College, Branch, Stream & Year)
            must reflect your current enrollment.
          </li>
        </ul>

        <p className="instruction-note">
          Once submitted, certificate details cannot be modified. Please review
          all fields before proceeding.
        </p>
      </div>

      {/* ================= USER DETAILS ================= */}
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input name="name" value={user.name} onChange={handleUserChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input
            name="mobile"
            value={user.mobile}
            onChange={handleUserChange}
          />
        </div>

        <div className="form-group">
          <label>College</label>
          <input
            name="college"
            value={user.college}
            onChange={handleUserChange}
          />
        </div>

        <div className="form-group">
          <label>Branch</label>
          <input
            name="branch"
            placeholder="Ex: CSE, ECE, MECH"
            value={user.branch}
            onChange={handleUserChange}
          />
        </div>

        <div className="form-group">
          <label>Stream</label>
          <select name="stream" value={user.stream} onChange={handleUserChange}>
            <option value="">Select</option>
            <option>B.Tech</option>
            <option>Diploma</option>
            <option>MCA</option>
            <option>MBA</option>
          </select>
        </div>

        <div className="form-group">
          <label>Year</label>
          <select name="year" value={user.year} onChange={handleUserChange}>
            <option value="">Select</option>
            {getYears().map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ================= CATEGORY ================= */}
      <div className="section">
        <h2>Choose Event Category</h2>
        <div className="category-row">
          {["tech", "nontech", "mgmt", "cult", "sports"].map((cat) => (
            <div
              key={cat}
              className={`category-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat === "tech" && "Technical"}
              {cat === "nontech" && "Non-Technical"}
              {cat === "mgmt" && "Management"}
              {cat === "cult" && "Cultural"}
              {cat === "sports" && "Sports"}
            </div>
          ))}
        </div>
      </div>

      {/* ================= EVENTS ================= */}
      {activeCategory && (
        <div className="events active">
          <div className="event-box">
            <h3>
              {activeCategory === "tech" && "Technical Events"}
              {activeCategory === "nontech" && "Non-Technical Events"}
              {activeCategory === "mgmt" && "Management Events"}
              {activeCategory === "cult" && "Cultural Events"}
              {activeCategory === "sports" && "Sports & Games"}
            </h3>

            <div className="event-grid">
              {events[activeCategory].map((evt) => (
                <label key={evt} className="event-item">
                  <input
                    type="checkbox"
                    checked={selectedEvents.includes(evt)}
                    onChange={() => toggleEvent(evt)}
                  />
                  {evt}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= SELECTED SUMMARY ================= */}
      {selectedEvents.length > 0 && (
        <div className="selected-summary">
          <h3>Selected Events</h3>
          <ul>
            {selectedEvents.map((evt) => (
              <li key={evt}>
                {evt}
                <button onClick={() => removeEvent(evt)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ================= PRICE ================= */}
      <div className="price-box">
        <h2>Total Amount: ₹{price}</h2>
        <p>₹299 – single event | ₹399 – multiple events</p>
      </div>

      {/* ================= PAYMENT ================= */}
      <button
        className="payment-btn"
        disabled={!canPay}
        onClick={handlePayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
