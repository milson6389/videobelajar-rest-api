import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { corsOptions } from "../config/corsOptions.js";
import { errorMiddleware } from "../middleware/errorMiddleware.js";
import { courseRouter } from "../routes/courseApi.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const web = express();
web.use(cors(corsOptions));
web.use(express.json());
web.use(courseRouter);
web.use(errorMiddleware);
web.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export const handler = serverless(web);
