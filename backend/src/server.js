import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import {clerkMiddleware} from "@clerk/express";
import userRouters from "./routes/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routers
app.get("/", (req, res) => {
  res.send("Hello World! from server");
});

// app route
app.use("/api/users", userRouters);
   

// Start the server after connecting to the database with function
const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log(`Server is running at http://localhost:${ENV.PORT}`)
    );
  } catch (error) {
    console.error("Error starting server:", error.message);
    process.exit(1);
  }
};

startServer();
