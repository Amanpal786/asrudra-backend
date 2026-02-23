import mongoose from 'mongoose';

const ExclusivePropertySchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, required: true },
  bedrooms: { type: Number, default: 0 },
  bathrooms: { type: Number, default: 0 },
  area: { type: String },
  image: { type: String },
  features: [{ type: String }],
  rating: { type: Number, default: 0 },
  popularity: { type: Number, default: 0 },
  dateAdded: { type: Date, default: Date.now },

  // Optional fields for specific property types
  floors: { type: Number },
  cabins: { type: Number },
  openSeats: { type: Number },
  plotType: { type: String },
  facing: { type: String },
  approvals: [{ type: String }],
});

// ✅ Export default model
const ExclusiveProperty = mongoose.model('ExclusiveProperty', ExclusivePropertySchema);
export default ExclusiveProperty;
