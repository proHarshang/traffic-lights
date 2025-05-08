import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import configRoutes from './routes/config.route';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/config', configRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
