import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url'; // ✅ ADD THIS
import path from 'path';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MongoDBURI;

app.use(cors());
app.use(express.json());


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
import propertyRoute from './route/property.route.js';
import authRoute from './route/auth.route.js';
import categoryRoutes from './route/category.routes.js';
import enquiryRoutes from './route/enquiry.routes.js';
import footerRoutes from './route/footer.routes.js';
import subscriberRoutes from './route/subscriber.routes.js';
import exclusiveRoutes from './route/exclusiveRoutes.js';
import exRoutes from './route/ex.rout.js'; // ✅ correct path and name
import resaleRoutes from "./route/resaleRoutes.js"; // Import resale routes';
//import otpRoutes from "./route/otpRoutes.js"; // ✅ must include `.js`


// Mount routes
app.use('/property', propertyRoute);            // CRUD for property listings
app.use('/user', authRoute);                    // Authentication and user routes
app.use('/categories', categoryRoutes);         // Property category filters
app.use('/enquiry', enquiryRoutes);             // Handle enquiry submissions
app.use('/footer', footerRoutes);               // Dynamic footer content
app.use('/subscriber', subscriberRoutes);       // Newsletter subscribers
app.use('/exclusive', exclusiveRoutes);         // Exclusive properties by ID
app.use('/exRoutes', exRoutes);                 // Alternative exclusive property route
app.use("/resale", resaleRoutes);
//app.use("otp", otpRoutes);
                // Resale property routes
app.get('/', (req, res) => {
  res.send('🏡 Real Estate Backend API Running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
