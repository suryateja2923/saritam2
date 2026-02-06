const nodemailer = require("nodemailer");
require("dotenv").config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

const sendConfirmationMail = async (to, data) => {
    let eventsArray = [];

    if (Array.isArray(data.events)) {
        // Case 1: already array
        eventsArray = data.events;
    }
    else if (typeof data.events === "string") {
        try {
            // Case 2: JSON string
            eventsArray = JSON.parse(data.events);
        } catch {
            // Case 3: comma separated string
            eventsArray = data.events.split(",").map(e => e.trim());
        }
    }

    await transporter.sendMail({
        from: `"SARITAM 2K26" <${process.env.EMAIL}>`,
        to,
        subject: "Registration Successful ",
        html: `
      <h2>Hi ${data.name},</h2>
      <p>Your registration is confirmed </p>

      <p><b>Events:</b> ${eventsArray.join(", ")}</p>
      <p><b>Amount Paid:</b> ₹${data.amount}</p>
      <p><b>Payment ID:</b> ${data.paymentId}</p>

      <br/>
      <p>See you at <b>SARITAM 2K26</b> </p>
    `,
    });
};


module.exports = { sendConfirmationMail }