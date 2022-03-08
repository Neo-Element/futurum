const Users = require("./Users");
const Products = require("./Products");

// Users.belongsToMany(Products, { as: "wish" }),
//   Products.belongsTo(Users, { as: "customers" });

module.exports = { Users, Products };
