const express = require("express");
const categoriesRouter = express.Router();
const CategoriesController = require("../controllers/categoriesControllers"); //EN CASO QUE CATEGORÍAS SEA UNA TABLA

categoriesRouter.get("/", CategoriesController.getAllCategory);
categoriesRouter.get("/:id", CategoriesController.getOneCategory);
categoriesRouter.post("/new", CategoriesController.newCategory);
categoriesRouter.delete("/:id", CategoriesController.deleteCategory);
categoriesRouter.put("/:id", CategoriesController.updateCategory);

module.exports = categoriesRouter;
