import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { corsOptions } from "../config/corsOptions.js";
import { errorMiddleware } from "../middleware/errorMiddleware.js";
import { courseRouter } from "../routes/courseApi.js";
import { paymentRouter } from "../routes/paymentApi.js";
import { trxRouter } from "../routes/trxApi.js";

dotenv.config();

export const web = express();
web.use(cors(corsOptions));
web.use(express.json());
web.get("/", (req, res) => {
  res.send("OK!");
});
web.use(courseRouter);
web.use(paymentRouter);
web.use(trxRouter);
web.use(errorMiddleware);
