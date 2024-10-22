import trxService from "../service/trxService.js";

const getAllTrx = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const result = await trxService.getAllTrx(userId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTrxById = async (req, res, next) => {
  try {
    const trxId = req.params.id;
    const result = await trxService.getTrxById(trxId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const addTrx = async (req, res, next) => {
  try {
    const trxData = req.body;
    const result = await trxService.addTrx(trxData);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateTrx = async (req, res, next) => {
  try {
    const trxData = req.body;
    const result = await trxService.updateTrx(trxData);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTrx = async (req, res, next) => {
  try {
    const trxData = req.body;
    await trxService.deleteTrx(trxData);
    res.status(200).json({
      message: "Trx Deleted",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllTrx,
  getTrxById,
  addTrx,
  updateTrx,
  deleteTrx,
};
