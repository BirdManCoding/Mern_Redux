import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/postRoutes.js";

const app = express();
var port = process.env.PORT || 8080;
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/posts", postRoutes);

app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred" });
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port);
    console.log("app and db running on port " + port);
  })
  .catch(err => {
    throw new Error(err);
  });
