const Users = require("./Users");
const Products = require("./Products");
const Carts = require("./Carts")
const Reviews = require("./Reviews")
const Payments = require("./Payments")
const Categories = require("./Categories")

Products.belongsTo(Categories, {as: "categories"})
Products.hasMany(Reviews, {as: "reviews"})

Reviews.belongsTo(Users,{as:"user"})

Users.hasMany(Carts, {as: "orders_users"})
Products.hasMany(Carts, {as: "orders_products"}) 
Payments.hasMany(Carts, {as: "payment"})

module.exports = { Users, Products, Carts , Reviews, Payments, Categories};
