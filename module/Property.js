import mongoose from 'mongoose';

const exroutesSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, enum: ['residential', 'commercial', 'plot'], required: true },
  bedrooms: Number,
  bathrooms: Number,
  area: String,
  image: String,
  features: [String],
  rating: Number,
  popularity: Number,
  dateAdded: { type: Date, default: Date.now },

  // Optional: Commercial
  floors: Number,
  cabins: Number,
  openSeats: Number,

  // Optional: Plot
  plotType: String,
  facing: String,
  approvals: [String],
});

const ExclusiveProperty = mongoose.model('exroutes', exroutesSchema);
export default ExclusiveProperty;
