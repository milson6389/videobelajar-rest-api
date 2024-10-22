import express from "express";
import trxController from "../controller/trxController.js";

const trxRouter = new express.Router();
trxRouter
  .route("/api/v1/trx")
  .get(trxController.getAllTrx)
  .post(trxController.addTrx)
  .put(trxController.updateTrx)
  .delete(trxController.deleteTrx);
trxRouter.route("/api/v1/trx/:userId").get(trxController.getAllTrx);
trxRouter.route("/api/v1/trxinfo/:id").get(trxController.getTrxById);

export { trxRouter };
