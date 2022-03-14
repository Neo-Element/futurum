const S = require("sequelize");
const db = require("../confDb");

class Carts extends S.Model {}
//hace falta el modelo o puede ser una tabla intermedia de una?
Carts.init({
    type_course:{
        type: S.STRING
    }
},{
    sequelize:db, modelName: "shopcart",
})
module.exports= Carts