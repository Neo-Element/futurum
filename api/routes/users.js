const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Users } = require("../models");
const UserController = require("../controllers/usersController");

// MIDDLEWARE PARA CHEQUEAR SI ES ADMIN
const isAdmin = (req, res, next) => {
  if (req.body.isAdmin) {
    next();
  } else {
    res.status(403).send(`You are not an admin, you do not have access`);
  }
};
//RUTA PARA REGISTRAR UN USUARIO
router.post("/register", UserController.registerUsers);
//RUTA PARA LOGIN
router.post("/login", passport.authenticate("local"), UserController.loginUsers);
//RUTA PARA LOGOUT
router.post("/logout", UserController.logOutUsers);
//RUTA PARA DEVOLVER USUARIO LOGUEADO

router.get("/me", UserController.getMe);

//RUTAS ADMIND
//RUTA PARA EDITAR UN USUARIO
router.put("/:id", isAdmin, UserController.editUsers);

//RUTA PARA ELIMINAR UN USUARIO
router.delete("/:id", isAdmin, UserController.deliteUsers);

//RUTA PARA VER TODOS LOS USUARIOS
router.get("/", isAdmin, UserController.getUsers);

//NO PEDIDAS EN TRELLO
//RUTA PARA VER UN USUARIO PARTICULAR
router.get("/:id", isAdmin, UserController.getOneUsers);
//RUTA PARA PROMOVER UN ADMINISTRADOR

router.patch("/admin/:id", isAdmin, UserController.promoveAdmin)

/*(req, res, next) => {
   const adminRole = req.body.isAdmin;

  console.log(req.body);
  if (adminRole) {
    Users.update(
      {
        isAdmin: false,
      },
      {
        where: { id: req.params.id },
      }
    ).then(() => {
      res.sendStatus(200);
    });
  } else {
    Users.update(
      {
        isAdmin: true,
      },
      {
        where: { id: req.params.id },
      }
    ).then(() => {
      res.sendStatus(200);
    });
  }
} */;

module.exports = router;
