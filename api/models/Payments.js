const S = require("sequelize");
const db = require("../confDb");

class Payments extends S.Model {}

Payments.init(
  {
    payment_type: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "payments",
  }
);
module.exports = Payments;
