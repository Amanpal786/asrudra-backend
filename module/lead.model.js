import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    property: {
      type: String
    },

    status: {
      type: String,
      default: "New Lead"
    },

    assigned: {
      type: String,
      default: "Manager"
    }
  },
  {
    timestamps: true,
    collection: "enquiries" // ✅ yaha aayega
  }
);

export default mongoose.model("Lead", leadSchema);