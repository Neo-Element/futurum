const Users = require("./Users");
const Products = require("./Products");
const Orders = require("./Orders");
const Reviews = require("./Reviews");
const Payments = require("./Payments");
const Categories = require("./Categories");

Products.belongsTo(Categories, { as: "categories" });
Products.hasMany(Reviews, { as: "reviews" });

Reviews.belongsTo(Users, { as: "user" });

Users.hasMany(Orders, { as: "orders_users" });
Products.hasMany(Orders, { as: "orders_products" });
Payments.hasMany(Orders, { as: "payment" });

module.exports = { Users, Products, Orders, Reviews, Payments, Categories };
