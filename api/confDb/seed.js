const products = require('../utils/fakeData')
const {Products} = require('../models')
const db= require('./index')

db.sync({force:true}).then(()=> Products.bulkCreate(products)).then(()=> console.log("seed finalizado"))
.catch((err)=> console.log("aca" ,err))




