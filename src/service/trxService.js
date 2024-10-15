import { ResponseError } from "../error/responseError.js";

let trxes = [];

const generateTrxInvNo = () => {
  const tgl = new Date().getDate().toString();
  const month = (new Date().getMonth() + 1).toString();
  const year = new Date().getFullYear().toString();
  const code = tgl + month + year;
  return code;
};

const addTrx = async (trxObj) => {
  const invCode = generateTrxInvNo();
  const newTrx = {
    id: trxObj.id,
    userId: trxObj.email,
    kelasId: trxObj.kelasId,
    kelasTitle: trxObj.title,
    trxNo: `INV/${invCode}`,
    trxDt: new Date().toLocaleString(),
    trxType: trxObj.trxType,
    paidDt: "",
    wopCode: trxObj.wopCode,
    price: trxObj.price,
    admin: trxObj.admin,
    vaNo: trxObj.vaNo,
    status: "PENDING",
  };
  trxes.push(newTrx);
  return newTrx;
};

const getAllTrx = async (userId) => {
  const userTrx = trxes.filter((trx) => trx.userId == userId);
  return userTrx;
};

const updateTrx = async (trx) => {
  const selectedTrx = trxes.findIndex((t) => t.id == trx.id);
  if (selectedTrx < 0) {
    throw new ResponseError(404, "Trx not found");
  }
  trxes = trxes.map((t) => {
    if (t.id == trx.id) {
      return {
        ...t,
        ...trx,
      };
    } else {
      return t;
    }
  });
  return trxes[selectedTrx];
};

const deleteTrx = async (trx) => {
  const selectedTrx = trxes.findIndex((t) => t.id == trx.id);
  if (selectedTrx < 0) {
    throw new ResponseError(404, "Trx not found");
  }
  const arr = trxes.splice(selectedTrx, 1);
  return arr;
};

export default {
  getAllTrx,
  addTrx,
  updateTrx,
  deleteTrx,
};
