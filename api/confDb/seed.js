const {products, reviews, users, categories, payments, carts} = require('../utils/fakeData')







const {Products} = require('../models')
const {Users}=require('../models')
const {Payments}=require('../models')
const {Categories}=require('../models')
const {Reviews}=require('../models')
const {Carts}=require('../models')

const db= require('./index')



db.sync({force:true}).then(()=>{ 
    Products.bulkCreate(products)
    Users.bulkCreate(users)
    Payments.bulkCreate(payments)
    Categories.bulkCreate(categories)
    Reviews.bulkCreate(reviews)
    Carts.bulkCreate(carts)

})
.then(()=> console.log("seed finalizado"))
.catch((err)=> console.log("aca" ,err))




