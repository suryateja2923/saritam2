const express = require("express")
const { createOrder, verifyPayment, getKey } = require("../Controller/eventRegController.js")
const router = express.Router()

router.post("/create-order", createOrder);
router.post("/verifyPayment", verifyPayment);
router.get("/getKey", getKey)

module.exports = router