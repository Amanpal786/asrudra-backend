import User from "../module/User.js";
import bcrypt from "bcryptjs";



// ✅ Login User
export const loginUser = async (req, res) => {
  const { employeeId, password } = req.body;

  try {
    const user = await User.findOne({ employeeId });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid Employee ID" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect Password" });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        employeeId: user.employeeId,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
};

// ✅ Send OTP to phone number
export const sendOtp = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found with this phone number" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    await user.save();

    await sendOTPViaSMS(phoneNumber, otp); // mock or real SMS
    return res.status(200).json({ success: true, message: "OTP sent successfully" });

  } catch (err) {
    console.error("OTP send error:", err);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

// ✅ Reset Password using OTP
export const resetPassword = async (req, res) => {
  const { phoneNumber, otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.otp || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.otp = null;
    user.otpExpires = null;

    await user.save();
    return res.status(200).json({ success: true, message: "Password reset successful" });

  } catch (err) {
    console.error("Reset error:", err);
    return res.status(500).json({ success: false, message: "Failed to reset password" });
  }
};
