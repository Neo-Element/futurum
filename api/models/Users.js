const S = require("sequelize");
const db = require("../confDb");
const bcrypt = require("bcrypt");

class Users extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Users.init(
  {
    userName: {
      type: S.STRING,
      allowNull: false,
    },
    nameAndLastName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
      allowNull: false,
    },
    icon: {
      type: S.VIRTUAL,
    },
    favorites: {
      type: S.ARRAY(S.INTEGER),
      defaultValue: [],
      get() {
        let value = this.getDataValue("favorites");
        return value;
      },
    },
    cart: {
      type: S.ARRAY(S.INTEGER),
      defaultValue: [],
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: "users",
  }
);

Users.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = Users;
