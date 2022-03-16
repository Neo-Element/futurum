const {Products, Categories} = require("../models/Products");

//GET PRODUCT
exports.getProduct= async(req, res) => {
  try{
    const product= await  Products.findOne({
      where: {
        productName: req.params.product, //EN REALIDAD SERÍA MEJOR BUSCAR POR ID, PREGUNTAR
      },
    })
    product ? res.json(product) : res.sendStatus(404)
  }
      catch(err){ 
        console.log(err)}
  }

  //ACTUALIZAR PRODUCTO
  exports.updateProduct=async (req, res,next) => {
    try{
      const result= await Products.update(req.body, {
      where: {
        id: req.params.productId,
      },
      returning: true,
      plain: true,
    })
    const product= result[1]
     res.status(201).json(product)
    }
    catch(err){
   next(err)
    }
  }
  //AÑADIR PRODUCTO
  exports.addProduct= async (req, res, next) => {
    try{
      const { category } = req.body;
      const data= await Categories.findOrCreate({where: {name: category }})
      const product= await Products.create(req.body)
      const category=data[0]
      product.setCategories(category)
      res.status(201).send(product)
    }
      catch(err){
        console.log(err)
        next(err)
      }  
  }
  //BORRAR PRODUCTO
  exports.delete= async (req, res) => {
    try{
      const { productId } = req.query;
       const result= await  Products.destroy({
      where: {
        id: productId,
      },
    })
    result? res.status(204).send([]) :res.status(404).send("The course you want to delete doesn't exist.")
    }
   catch(err){
    next(err)
   }

  }