import ResaleProperty from "../module/ResaleProperty.js";

export const getAllResale = async (req, res) => {
  try {
    const properties = await ResaleProperty.find().sort({ createdAt: -1 });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resale properties" });
  }
};

export const uploadResale = async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
    const newProperty = new ResaleProperty({
      ...req.body,
      images: imagePaths,
    });
    await newProperty.save();
    res.status(201).json({ message: "Property uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload property" });
  }
};
