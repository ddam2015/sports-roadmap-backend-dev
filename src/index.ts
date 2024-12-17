import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import connectToDb from "./config/mongoConnect";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Health check endpoint (useful for EB health monitoring)
app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "healthy",
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version,
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello, Sports Roadmap Backend",
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version,
  });
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Version: ${process.env.npm_package_version}`);
  await connectToDb();
});
