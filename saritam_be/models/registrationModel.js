const db = require("../config/db")

const saveRegistration = (data, callback) => {
    const sql = `
    INSERT INTO registrations
    (name, email, mobile, college, events, amount, payment_id, payment_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
    console.log(data);
    db.query(
        sql,
        [
            data.name,
            data.email,
            data.mobile,
            data.college,
            JSON.stringify(data.events),
            data.amount,
            data.paymentId,
            "SUCCESS"
        ],
        callback
    );
};

module.exports = { saveRegistration }