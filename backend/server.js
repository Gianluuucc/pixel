import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("MongoDB connected"));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req,res)=>res.send("API OK"));

app.post("/api/stripe/checkout", async (req,res)=>{
  res.json({ url: "https://stripe.com" });
});

app.listen(process.env.PORT || 5000);