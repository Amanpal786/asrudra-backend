// controller/exclusiveController.js
import ExclusiveProperty from '../module/Property.js';

// GET single property by ID (existing)
export const getExclusivePropertyById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const property = await ExclusiveProperty.findOne({ id });
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ NEW: GET paginated list of properties
export const getExclusiveProperties = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 100;
    const skip = (page - 1) * limit;

    const [properties, total] = await Promise.all([
      ExclusiveProperty.find().skip(skip).limit(limit),
      ExclusiveProperty.countDocuments()
    ]);

    res.status(200).json({
      properties,
      pagination: {
        page,
        limit,
        total,
        showingFrom: skip + 1,
        showingTo: skip + properties.length,
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
