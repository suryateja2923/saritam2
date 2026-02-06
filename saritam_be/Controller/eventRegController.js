

const crypto = require("crypto");
const razorpay = require("../config/razorpay.js");
const { saveRegistration } = require("../models/registrationModel.js");
const { sendConfirmationMail } = require("../config/mailer.js");
require("dotenv").config()



const createOrder = async (req, res) => {
    try {
        const { amount } = req.body;

        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: "fest_" + Date.now()
        });

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: "Order creation failed" });
    }
};

// const verifyPayment = async (req, res) => {

//     const {
//         razorpay_order_id,
//         razorpay_payment_id,
//         razorpay_signature,
//         userData
//     } = req.body;
//     console.log(req.body);
//     const body =
//         razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_SECRET)
//         .update(body)
//         .digest("hex");

//     if (expectedSignature !== razorpay_signature) {
//         return res.status(400).json({ message: "Payment verification failed" });
//     }
//     saveRegistration(
//         { ...userData, paymentId: razorpay_payment_id },
//         async (err) => {
//             if (err) return res.status(500).json(err);

//             // 📧 Send email
//             await sendConfirmationMail(
//                 userData.email,
//                 { ...userData, paymentId: razorpay_payment_id }
//             );

//             res.json({ message: "Payment verified & registration completed" });
//         }
//     );
// };

const verifyPayment = async (req, res) => {
    try {
        console.log("VERIFY PAYMENT HIT");
        console.log("BODY:", req.body);

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            userData
        } = req.body;

        console.log("ORDER:", razorpay_order_id);
        console.log("PAYMENT:", razorpay_payment_id);
        console.log("SIGNATURE:", razorpay_signature);
        console.log("USERDATA:", userData);

        // 🔐 Signature verification
        const crypto = require("crypto");
        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        console.log("GEN SIGN:", generatedSignature);

        if (generatedSignature !== razorpay_signature) {
            console.log("SIGNATURE MISMATCH");
            return res.status(400).json({ message: "Invalid signature" });
        }

        console.log("SIGNATURE VERIFIED");

        // 🧠 SAFETY FIXES
        const safeData = {
            ...userData,
            events: Array.isArray(userData.events)
                ? userData.events.join(", ")
                : userData.events,
            paymentId: razorpay_payment_id
        };

        console.log("SAFE DATA:", safeData);

        // 💾 SAVE TO DB
        saveRegistration(safeData, async (err, result) => {
            if (err) {
                console.error(" DB ERROR:", err);
                return res.status(500).json({ message: "DB Error" });
            }

            console.log(" DB SAVED");

            try {
                await sendConfirmationMail(userData.email, safeData);
                console.log("MAIL SENT");
            } catch (mailErr) {
                console.error(" MAIL ERROR:", mailErr);
            }

            res.json({ message: "Payment verified & registration completed" });
        });

    } catch (err) {
        console.error(" VERIFY PAYMENT CRASH:", err);
        res.status(500).json({ message: "Server crashed" });
    }
};

const getKey = async (req, res) => {
    const keyIs = process.env.RAZORPAY_KEY;
    res.status(200).json(keyIs)
};

module.exports = { createOrder, verifyPayment, getKey }