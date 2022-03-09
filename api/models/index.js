const Users = require("./Users");
const Products = require("./Products");

Users.belongsToMany(Products, { as: "courses", through: "users_courses" });
Products.belongsToMany(Users, { as: "courses", through: "users_courses" });

module.exports = { Users, Products };
