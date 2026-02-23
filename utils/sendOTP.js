// In-memory OTP storage (use Redis in production)
const otpMap = new Map();

const otpStore = {
  set: (phone, otp) => otpMap.set(phone, otp),
  get: (phone) => otpMap.get(phone),
  delete: (phone) => otpMap.delete(phone),
};

module.exports = otpStore;
