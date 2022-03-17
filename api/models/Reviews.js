const S = require("sequelize");
const db = require("../confDb");

class Reviews extends S.Model {}

Reviews.init(
  {
    comment: {
      type: S.TEXT,
    },
    votes: {
      type: S.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "reviews",
  }
);
module.exports = Reviews;
