const Users = require("./Users");
const Products = require("./Products");
const Carts = require("./Carts")

Users.belongsToMany(Products, { as: "courses", through: "users_courses" });
Products.belongsToMany(Users, { as: "courses", through: "users_courses" });

Users.belongsTo(Carts,{as: "myCart"})
Carts.belongsToMany(Products)

module.exports = { Users, Products };
