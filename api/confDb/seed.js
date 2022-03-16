const {products, reviews, users, categories, payments, carts} = require('../utils/fakeData')






const {Categories}=require('../models')
const {Payments}=require('../models')
const {Products} = require('../models')
const {Users}=require('../models')
const {Reviews}=require('../models')
const {Carts}=require('../models')

const db= require('./index')



db.sync({force:true}).then(()=>{ 
    Categories.bulkCreate(categories)
    Payments.bulkCreate(payments)
    Products.bulkCreate(products)
    Users.bulkCreate(users)
    Reviews.bulkCreate(reviews)
    Carts.bulkCreate(carts)

})
.then(()=> console.log("seed finalizado"))
.catch((err)=> console.log("aca" ,err))




