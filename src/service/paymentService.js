import { ResponseError } from "../error/responseError.js";
import DataPayment from "../data/wop.json" assert { type: "json" };

const getAllPaymentGateways = () => {
  return DataPayment;
};

const getPaymetnInfoByCode = (code) => {
  const selectedWOP = [];
  for (let i = 0; i < DataPayment.length; i++) {
    for (let j = 0; j < DataPayment[i].sub.length; j++) {
      if (DataPayment[i].sub[j].code == code) {
        selectedWOP.push(DataPayment[i].sub[j]);
      }
    }
  }
  if (selectedWOP.length < 1) {
    throw new ResponseError(404, "Payment Method Not Found");
  }

  return selectedWOP[0];
};

const getPaymentGuideByType = (type) => {
  const selectedGuide = DataPayment.find((wop) => wop.trxType == type);
  if (!selectedGuide) {
    throw new ResponseError(404, "Payment Type Not Found");
  }
  return selectedGuide.guide;
};

export default {
  getAllPaymentGateways,
  getPaymetnInfoByCode,
  getPaymentGuideByType,
};
