import Enquiry from "../module/enquiry.model.js";

export const createEnquiry = async (req, res) => {
  try {

    console.log("BODY AA RHA HAI:", req.body);

    const { fullName, email, phoneNumber, message } = req.body;

    if (!fullName || !email || !phoneNumber) {
      return res.status(400).json({
        message: "Required fields missing"
      });
    }

    const enquiry = new Enquiry({
      fullName,
      email,
      phoneNumber,
      message
    });

    await enquiry.save();

    res.status(201).json({
      message: "Enquiry saved successfully"
    });

  } catch (error) {

    console.error("Enquiry Error:", error);

    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};