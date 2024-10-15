import paymentService from "../service/paymentService.js";

const getAllPaymentGateways = async (req, res, next) => {
  try {
    const result = await paymentService.getAllPaymentGateways();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getPaymentInfoByCode = async (req, res, next) => {
  try {
    const paymentWOPCode = req.params.code;
    const result = await paymentService.getPaymetnInfoByCode(paymentWOPCode);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getPaymentGudieByType = async (req, res, next) => {
  try {
    const paymentType = req.params.type;
    const result = await paymentService.getPaymentGuideByType(paymentType);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllPaymentGateways,
  getPaymentInfoByCode,
  getPaymentGudieByType,
};
