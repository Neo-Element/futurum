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

const Categories = require("../models/Categories"); //EN CASO QUE CATEGORÍAS SEA UNA TABLA

categoriesRouter.get("/", (req, res, next) => {
  Categories.findAll()
    .then((categories) =>
      categories ? res.json(categories) : res.sendStatus(404)
    )
    .catch((err) => console.log(err));
});

categoriesRouter.get("/:id", (req, res, next) => {
  Categories.findOne({ where: { id: req.params.id } })
    .then((category) => res.send(category))
    .catch(next);
});

categoriesRouter.get("/prod/:name", (req, res, next) => {
  Categories.findOne({ where: { name: req.params.name } })
    .then((category) => {
      Products.findAll({ where: { categoriesId: category.id } });
    })
    .then((courses) => res.send(courses))
    .catch(next);
});

categoriesRouter.post("/new", (req, res) => {
  Categories.create(req.body)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => console.err(err));
});

categoriesRouter.delete("/:id", (req, res) => {
  Categories.destroy({
    where: {
      id: req.params.id,
    },
  }).then(()=> res.sendStatus(202))
  .catch(err => console.log(err))
});

categoriesRouter.put("/:id", (req, res) => {
  Categories.update(req.body, {
    where: {
      id: req.params.id,
    },
    returnin: true,
    plain: true,
  }).then((result) => {
    const category = result[1];
    res.status(201).json(category);
  });
});


module.exports = categoriesRouter;
