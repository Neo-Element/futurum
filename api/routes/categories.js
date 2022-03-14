const express = require("express");
const categoriesRouter = express.Router();
const Categories = require("../models/Categories"); //EN CASO QUE CATEGORÍAS SEA UNA TABLA

router.get("/:name", (req, res, next) => {
  Categories.findOne({ where: { name: req.params.name } })
    .then((category) => {
      Products.findAll({ where: { categoryId: category.id } });
    })
    .then((courses) => res.send(courses))
    .catch(next);
});

categoriesRouter.get("/new", (req, res) => {
  Categories.create(req.body)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => console.err(err));
});

categoriesRouter.delete("/delete/:id", (req, res) => {
  Categories.destroy({
    where: {
      id: req.params.id,
    }, //VER SI HACE FALTA CATEGORIES.UPDATE()
  });
});

categoriesRouter.put("/edit/:id", (req, res) => {
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