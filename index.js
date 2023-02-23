const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB!");
});

app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
  console.log("main url");
});

app.listen("5000", () => {
  console.log("backend is running");
});
