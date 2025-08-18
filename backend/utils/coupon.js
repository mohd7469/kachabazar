const coupons = [
  {
    status: "show",
    title: {
      en: "Summer Gift Voucher",
      de: "sommer geschenkgutschein",
      ar: "قسيمة هدية الصيف"
    },
    couponCode: "SUMMER10",
    endTime: "2026-10-18T20:38:00.000Z",
    minimumAmount: 100,
    productType: "Grocery",
    logo: "https://i.ibb.co/23kQcB9/ins3.jpg",
    discountType: {
      type: "percentage",
      value: 10,
    },
  },
  {
    status: "show",
    title: {
      en: "Winter Gift Voucher",
      de: "wintergeschenkgutschein",
      ar: "قسيمة هدية شتوية"
    },
    couponCode: "WINTER15",
    endTime: "2025-05-31T20:19:00.000Z",
    minimumAmount: 150,
    productType: "Grocery",
    logo: "https://i.ibb.co/wBBYm7j/ins4.jpg",
    discountType: {
      type: "fixed",
      value: 15,
    },
  },
  {
    status: "show",
    title: {
      en: "Summer Gift Voucher",
      de: "sommer geschenkgutschein",
      ar: "قسيمة هدية صيفية"
    },
    couponCode: "AUTUMN20",
    endTime: "2024-12-20T00:56:00.000Z",
    minimumAmount: 200,
    productType: "Cloths",
    logo: "https://i.ibb.co/4thS4Z1/ins2.jpg",
    discountType: {
      type: "percentage",
      value: 20,
    },
  },
  {
    status: "show",
    title: {
      en: "August Gift Voucher",
      de: "august geschenkgutschein",
      ar: "قسيمة هدية أغسطس"
    },
    couponCode: "SPRING25",
    endTime: "2024-10-31T08:30:00.000Z",
    minimumAmount: 250,
    productType: "Grocery",
    logo: "https://i.ibb.co/PDLPDHc/ins1.jpg",
    discountType: {
      type: "percentage",
      value: 25,
    },
  },
];
module.exports = coupons;
