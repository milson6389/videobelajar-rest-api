import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { corsOptions } from "../config/corsOptions.js";
import { errorMiddleware } from "../middleware/errorMiddleware.js";
import { courseRouter } from "../routes/courseApi.js";

dotenv.config();

export const web = express();
web.use(cors(corsOptions));
web.use(express.json());
web.use(courseRouter);
web.use(errorMiddleware);
