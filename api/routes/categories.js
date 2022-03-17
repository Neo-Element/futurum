const express = require("express");
const categoriesRouter = express.Router();
const CategoriesCrontroller = require("../controllers/categoriesControllers"); //EN CASO QUE CATEGORÍAS SEA UNA TABLA


//OBTENER TODAS LAS CATEGORIAS
categoriesRouter.get("/", CategoriesCrontroller.getAll);
//OBTENER UNA SOLA CATEGORIA
categoriesRouter.get("/:id", CategoriesCrontroller.getOne);
//OBTENER PRODUCTO POR CATEGORIA
categoriesRouter.get("/prod/:name", CategoriesCrontroller.getByCategory);
//CREAR CATEGORIA
categoriesRouter.post("/new", CategoriesCrontroller.newCategory);
// BORRAR CATEGORIA
categoriesRouter.delete("/:id", CategoriesCrontroller.deleteCategory);
//EDITAR CATEGORIA
categoriesRouter.put("/:id", CategoriesCrontroller.updateCategory);





module.exports = categoriesRouter;
