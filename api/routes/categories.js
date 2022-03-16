const express = require("express");
const categoriesRouter = express.Router();
const CategoriesCrontroller= require("../controllers/categories")//EN CASO QUE CATEGORÍAS SEA UNA TABLA

//OBTENER POR CATEGORIA
categoriesRouter.get("/:name", CategoriesCrontroller.getByCategorie);
//CREAR CATEGORIA
categoriesRouter.get("/new", CategoriesCrontroller.newCategory);
// BORRAR CATEGORIA 
categoriesRouter.delete("/delete/:id",CategoriesCrontroller.deleteCategory );
//EDITAR CATEGORIA
categoriesRouter.put("/edit/:id", CategoriesCrontroller.updateCategory);

module.exports = categoriesRouter;