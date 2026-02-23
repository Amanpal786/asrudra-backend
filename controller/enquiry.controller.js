import Enquiry from "../module/enquiry.model.js";

export const createEnquiry = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, message } = req.body;

    const newEnquiry = new Enquiry({
      fullName,
      email,
      phoneNumber,
      message,
    });

    const saved = await newEnquiry.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
