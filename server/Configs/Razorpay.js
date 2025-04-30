// Configs/Razorpay.js
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_test_gEREBntUWy5mmQ",
  key_secret: "vhLJ0LxwyHPdPOFR9ORmvKbJ",
});

module.exports = instance;
