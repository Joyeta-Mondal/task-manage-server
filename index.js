// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import morgan from "morgan";
// import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
// import routes from "./routes/index.js";
// import { dbConnection } from "./utils/index.js";
// require("dotenv").config();
// // dotenv.config();

// const express = require("express");

// dbConnection();

// const PORT = process.env.PORT || 5000;

// const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

// app.use(morgan("dev"));
// app.use("/api", routes);

// app.use(routeNotFound);
// app.use(errorHandler);

// app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import morgan from "morgan";
// import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewave.js";
// import routes from "./routes/index.js";
// import { dbConnection } from "./utils/index.js";

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Connect to MongoDB
// dbConnection();

// // Define PORT
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));

// // Routes
// app.use("/api", routes);

// // Error Handling Middleware
// app.use(routeNotFound);
// app.use(errorHandler);

// // Start Server
// app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

// index.js
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewave.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js"; // Correct import

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
dbConnection();

// Define PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

// Error Handling Middleware
app.use(routeNotFound);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
