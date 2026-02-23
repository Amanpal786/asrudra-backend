import mongoose from "mongoose";

const resalePropertySchema = new mongoose.Schema(
  {
    ownerName: String,
    phone: String,
    title: String,
    type: String,
    location: String,
    price: String,
    area: String,
    bedrooms: String,
    bathrooms: String,
    description: String,
    images: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ResaleProperty", resalePropertySchema);
