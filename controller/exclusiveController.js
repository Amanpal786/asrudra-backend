// controllers/exclusiveController.js

import ExclusiveProperty from '../module/ExclusiveProperty.js';

// Get all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await ExclusiveProperty.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching properties', error: err });
  }
};

// Get single property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await ExclusiveProperty.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching property', error: err });
  }
};

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const newProperty = new ExclusiveProperty(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(400).json({ message: 'Error creating property', error: err });
  }
};
