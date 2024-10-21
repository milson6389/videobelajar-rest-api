import { ResponseError } from "../error/responseError.js";

const DataPayment = [
  {
    id: 1,
    title: "Transfer Bank",
    trxType: "trf",
    sub: [
      {
        title: "Bank BCA",
        code: "bbca",
        trxType: "trf",
        va_code: "11111",
        admin: 5000,
        img: "https://i.pinimg.com/originals/29/61/0b/29610b7dbf7e4ea5070626923a12cba8.png",
        isMaintenance: false,
      },
      {
        title: "Bank BNI",
        code: "bbni",
        trxType: "trf",
        va_code: "22222",
        admin: 5000,
        img: "https://i.pinimg.com/originals/36/38/43/36384348ef9d7bfff66da6da9e975d56.png",
        isMaintenance: false,
      },
      {
        title: "Bank BRI",
        code: "bbri",
        trxType: "trf",
        va_code: "33333",
        admin: 7000,
        img: "https://i.pinimg.com/originals/6b/13/7a/6b137a6a174c2f054904a3be35fe249f.png",
        isMaintenance: true,
      },
      {
        title: "Bank Mandiri",
        code: "bmri",
        trxType: "trf",
        va_code: "44444",
        admin: 6500,
        img: "https://vectorez.biz.id/wp-content/uploads/2023/10/Logo-Bank-Mandiri.png",
        isMaintenance: true,
      },
    ],
    guide: [
      {
        title: "Transfer via ATM",
        desc: [
          "1. Masukkan kartu ATM dan PIN Anda",
          "2. Di menu utama pilih Transaksi Lainnya. Pilih Transfer. Pilih Ke Virtual Account",
          "3. Masukkan nomor Virtual Account",
          "4. Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu anda bayarkan, kemudian pilih Benar",
          "5. Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih Ya, atau pilih Tidak jika data di layar masih salah",
          "6. Transaksi Anda sudah selesai. Pilih Tidak untuk tidak melanjutkan transaksi lain",
        ],
      },
      {
        title: "Transfer via Mobile Banking",
        desc: [
          "1. Buka Aplikasi Mobile Banking",
          "2. Di menu utama pilih Transaksi Lainnya. Pilih Transfer. Pilih Ke Virtual Account",
          "3. Masukkan nomor Virtual Account",
          "4. Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu anda bayarkan, kemudian Klik tombol Send",
          "5. Klik OK untuk melanjutkan pembayaran",
          "6. Masukkan PIN Anda untuk mengotorisasi transaksi",
          "7. Transaksi Anda telah selesai",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "E-Wallet",
    trxType: "ewallet",
    sub: [
      {
        title: "Dana",
        code: "dana",
        trxType: "ewallet",
        va_code: "55555",
        admin: 0,
        img: "https://i.pinimg.com/originals/f5/8c/a3/f58ca3528b238877e9855fcac1daa328.jpg",
        isMaintenance: false,
      },
      {
        title: "OVO",
        code: "ovo",
        trxType: "ewallet",
        va_code: "66666",
        admin: 2500,
        img: "https://static.vecteezy.com/system/resources/previews/028/766/360/original/ovo-ewallet-payment-icon-symbol-free-png.png",
        isMaintenance: false,
      },
      {
        title: "Link Aja",
        code: "linkaja",
        trxType: "ewallet",
        va_code: "77777",
        admin: 2000,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/LinkAja.svg/2048px-LinkAja.svg.png",
        isMaintenance: true,
      },
      {
        title: "Shopee Pay",
        code: "spay",
        trxType: "ewallet",
        va_code: "88888",
        admin: 0,
        img: "https://i.pinimg.com/736x/d0/19/16/d019163d861908ed0046391ebfa42ce1.jpg",
        isMaintenance: false,
      },
    ],
    guide: [
      {
        title: "Pembayaran via E-Wallet",
        desc: [
          "1. Buka Aplikasi E-Wallet",
          "2. Pilih Transfer, kemudian pilih ke Rekening Bank",
          "3. Masukkan nomor virtual account tujuan",
          "4. Masukkan angka yang perlu anda bayarkan, kemudian pilih lanjutkan",
          "5. Cek dan perhatikan detail konfirmasi pembayaran",
          "6. Masukkan Pin E-Wallet / Biometric anda untuk mengkonfirmasi transfer",
          "7. Transaksi Anda sudah selesai.",
        ],
      },
    ],
  },
];

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
