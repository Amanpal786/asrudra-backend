import mongoose from 'mongoose';

const footerSchema = new mongoose.Schema({
  headerLinks: [{ name: String, path: String }],
  services: [String],
  locations: [String],
  contactInfo: {
    address: [String],
    phones: [String],
    emails: [String],
  },
  socials: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
  }
}, { timestamps: true });

export default mongoose.model('Footer', footerSchema);
