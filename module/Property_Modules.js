import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    propertyId: {
      type: Number,
      required: true,
      unique: true,
      index: true, // faster lookup for property detail pages
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['residential', 'commercial', 'plot', 'office'],
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      default: [],
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    bedrooms: {
      type: Number,
      default: 0,
    },
    bathrooms: {
      type: Number,
      default: 0,
    },
    floors: {
      type: Number,
      default: 0,
    },
    cabins: {
      type: Number,
      default: 0,
    },
    openSeats: {
      type: Number,
      default: 0,
    },
    plotType: {
      type: String,
      enum: ['residential', 'commercial', 'industrial', 'agricultural'],
    },
    facing: {
      type: String,
    },
    approvals: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
