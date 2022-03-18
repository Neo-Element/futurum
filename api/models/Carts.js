const S = require("sequelize");
const db = require("../confDb");

class Carts extends S.Model {}

Carts.init({
    date:{
        type: S.DATE
        
    }
},{
    sequelize:db, modelName: "shopcart",
})
module.exports= Carts;