import { useLocation, useNavigate } from "react-router-dom";
import API from "../../api";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = location.state;

  if (!userData) {
    navigate("/register/step1");
    return null;
  }

  const loadRazorpay = async () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    // 1️⃣ Create order from backend
    const orderRes = await API.post("/create-order", {
      amount: userData.amount,
    });

    const order = orderRes.data;

    const key = await API.get("/getKey");

    // 2️⃣ Razorpay options
    const options = {
      key: key.data,
      amount: order.amount,
      currency: "INR",
      name: "College Fest",
      description: "Event Registration",
      order_id: order.id,

      handler: async function (response) {
        console.log(response);
        console.log(userData);
        // 3️⃣ Send payment details to backend
        const verifyRes = await API.post("/verifyPayment", {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          userData,
        });
        console.log(verifyRes.data);
        navigate("/");
      },

      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.phone,
      },

      theme: { color: "#2bffc6" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="anime-pay-wrapper">
      <div className="anime-card">
        <h1 className="anime-title">⚡ FEST CHECKOUT ⚡</h1>

        <div className="anime-info">
          <div>
            <span>Name</span>
            <p>{userData.name}</p>
          </div>
          <div>
            <span>College</span>
            <p>{userData.college}</p>
          </div>
          <div className="full">
            <span>Events</span>
            <p>{userData.events.join(", ")}</p>
          </div>
          <div>
            <span>Email</span>
            <p>{userData.email}</p>
          </div>
          <div>
            <span>Mobile</span>
            <p>{userData.mobile}</p>
          </div>
        </div>

        <div className="anime-amount">Total Amount- {userData.amount}/-</div>

        <button id="pay-btn" onClick={loadRazorpay}>
          PAY {userData.amount}/-
        </button>

        <p className="anime-note">Powered by Razorpay • Ultra Secure</p>
      </div>
    </div>
  );
};

export default Payment;
