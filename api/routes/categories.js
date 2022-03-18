const express = require("express");
const categoriesRouter = express.Router();
const CategoriesController = require("../controllers/categoriesControllers"); 
//MARI/BACK
categoriesRouter.get("/", CategoriesController.getAllCategory);
//MARI/BACK
categoriesRouter.get("/:id", CategoriesController.getOneCategory);
//MARI/BACK
categoriesRouter.post("/new", CategoriesController.newCategory);
//MARI/BACK
categoriesRouter.delete("/:id", CategoriesController.deleteCategory);
//MARI/BACK
categoriesRouter.put("/:id", CategoriesController.updateCategory);
//MARI/BACK
module.exports = categoriesRouter;
