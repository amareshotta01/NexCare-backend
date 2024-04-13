import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";
import connectDB from "./db.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: true,
};

//Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:5173/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("API is working");
});

//middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute); //domain/api/v1/auth/register or login
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

app.listen(port, () => {
  connectDB();
  console.log("Server running on port " + port);
});
