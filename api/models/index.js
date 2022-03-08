const Users= require("./users")
const Products= require("./products")

Users.hasMany(Products, {as: "wish"}),
Products.hasMany(Users, {as: "students"})

module.exports= {Users, Products}