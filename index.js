import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import leadRoutes from "./route/lead.route.js";
import propertyRoute from "./route/property.route.js";
import authRoute from "./route/auth.route.js";
import categoryRoutes from "./route/category.routes.js";
import footerRoutes from "./route/footer.routes.js";
import subscriberRoutes from "./route/subscriber.routes.js";
import exclusiveRoutes from "./route/exclusiveRoutes.js";
import exRoutes from "./route/ex.rout.js";
import resaleRoutes from "./route/resaleRoutes.js";
import employeeRoutes from "./route/employee.route.js";
import hiringRoutes from "./route/hiring.route.js";
import visitRoutes from "./route/visit.route.js";
import prospectRoutes from "./route/prospect.route.js";
import dashboardRoutes from "./route/dashboard.js";
import enquiryRoutes from "./route/enquiryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MongoDBURI;

/* ------------------ MIDDLEWARE ------------------ */
app.use(cors());
app.use(express.json());

/* ------------------ DATABASE ------------------ */
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ------------------ ROUTES ------------------ */

// Health check
app.get("/", (req, res) => {
  res.send("🏡 Real Estate Backend API Running");
});

// Leads CRM API
app.use("/api/leads", leadRoutes);

// Other APIs
app.use("/property", propertyRoute);
app.use("/user", authRoute);
app.use("/categories", categoryRoutes);
app.use("/footer", footerRoutes);
app.use("/subscriber", subscriberRoutes);
app.use("/exclusive", exclusiveRoutes);
app.use("/exRoutes", exRoutes);
app.use("/resale", resaleRoutes);
app.use("/api", employeeRoutes);
app.use("/api",hiringRoutes);
app.use("/api",visitRoutes);
app.use("/api",prospectRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/enquiries", enquiryRoutes);

/* ------------------ SERVER ------------------ */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});