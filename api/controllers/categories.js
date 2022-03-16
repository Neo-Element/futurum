const {Categories} = require("../models");


//OBTENER POR CATEGORIA 
exports.getByCategorie= async (req, res, next) => {
  try{
    const category= await  Categories.findOne({ where: { name: req.params.name } })
     const courses= await Products.findAll({ where: { categoryId: category.id } })
     res.send(courses)
  }
      catch(err){
        next(err)
      };
  }

  //CREAR CATEGORIA
  exports.newCategory= async (req, res) => {
    try{
      const category= await Categories.create(req.body)
      res.status(201).json(category)
    }
      catch(err){
        console.err(err)
        next(err)
      }  
  }
  //BORRAR CATEGORIA
  exports.deleteCategory= async (req, res) => { // esto funciona
    try{
      await  Categories.destroy({
      where: {
        id: req.params.id,
      }, //VER SI HACE FALTA CATEGORIES.UPDATE()
    })
    }
   catch(err){
     next(err)
   }
  }
  // EDITAR CATEGORIA
  exports.updateCategory= async (req, res) => {
    try{
      const result= await Categories.update(req.body, {
      where: {
        id: req.params.id,
      },
      returnin: true,
      plain: true,
    })
    const category= result[1]
    res.status(201).json(category)
    }
   catch(err){
     next(err)
   }
  }