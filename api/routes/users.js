const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Users } = require("../models");

//RUTA PARA REGISTRAR UN USUARIO
router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.sendStatus(201);
  })
  .catch(err => console.log(err))
});

//RUTA PARA LOGIN
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

//RUTA PARA LOGOUT
router.post("/logout", (req, res) => {
  req.logOut();
  res.status(200).send({});
});

//RUTA PARA EDITAR UN USUARIO
router.put("/:id", (req, res, next) => {
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(([affectedRows, updated]) => {
      const user = updated[0];
      res.send(user);
    })
    .catch(next);
});

//RUTA PARA DEVOLVER USUARIO LOGUEADO

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

//OTRA OPCION ES HACER UN MIDDLEWARE
// const estaLogueado = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// };

// MIDDLEWARE PARA CHEQUEAR SI ES ADMIN
const isAdmin = (req, res, next) => {
  if (req.body.isAdmin) {
    next();
  } else {
    res.status(403).send(`You are not an admin, you do not have access`);
  }
};

//app.use(isAdmin);

//RUTA PARA PROMOVER UN ADMINISTRADOR
router.put("/admin/:id", isAdmin, (req, res, next) => {
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(([affectedRows, updated]) => {
      const user = updated[0];
      res.send(user);
    })
    .catch(next);
});

//RUTA PARA ELIMINAR UN USUARIO
router.delete("/:id", isAdmin, (req, res, next) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

//RUTA PARA VER TODOS LOS USUARIOS
router.get("/", isAdmin, (req, res, next) => {
  Users.findAll()
    .then((users) => {
      return res.send(users);
    })
    .catch(next);
});

//NO PEDIDAS EN TRELLO
//RUTA PARA VER UN USUARIO PARTICULAR
router.get("/:id", (req, res, next) => {
  Users.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => res.send(user))
    .catch(next);
});

module.exports = router;
