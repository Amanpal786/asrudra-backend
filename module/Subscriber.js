import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  source: { type: String, enum: ['subscribe', 'enquiry'], default: 'subscribe' }
}, { timestamps: true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export default Subscriber;
