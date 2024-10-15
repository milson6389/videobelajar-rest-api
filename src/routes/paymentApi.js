import express from "express";
import paymentController from "../controller/paymentController.js";

const paymentRouter = new express.Router();
paymentRouter
  .route("/api/v1/payment")
  .get(paymentController.getAllPaymentGateways);
paymentRouter
  .route("/api/v1/payment/:code")
  .get(paymentController.getPaymentInfoByCode);
paymentRouter
  .route("/api/v1/payment/guide/:type")
  .get(paymentController.getPaymentGudieByType);

export { paymentRouter };
