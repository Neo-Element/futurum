const S = require("sequelize");
const db = require("../confDb");

class Carts extends S.Model {}

Carts.init({
    type_course:{
        type: S.STRING
    }
},{
    sequelize:db, modelName: "shoppingcart",
})
module.exports= Carts