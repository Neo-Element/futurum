const Users = require("./Users");
const Products = require("./Products");
const Carts = require("./Carts")
const Reviews = require("./Reviews")
const Payments = require("./Payments")
const Categories = require("./Categories")

Users.belongsToMany(Products, { as: "courses", through: "users_courses" });
Products.belongsToMany(Users, { as: "courses", through: "users_courses" });


Carts.belongsTo(Users, {as: "id_users"})
Carts.belongsTo(Products, {as: "id_products"}) 

module.exports = { Users, Products, Carts , Reviews, Payments, Categories};
