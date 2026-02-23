import Property from "../module/Property_Modules.js"; // ✅ Correct path
// Don't forget to export your functions
export const getProperty = async (req, res) => {
  try {
    const property = await Property.find();

    if (!property || property.length === 0) {
      return res.status(404).json({ message: "No properties found" });
    }

    res.status(200).json(property);
  } catch (error) {
    console.error("Error in getProperty:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProperty = async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error("Error in createProperty:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
