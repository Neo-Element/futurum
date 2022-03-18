const { Users } = require("../models");

//REGISTRO USUARIOS
exports.serviceResgisterUser = async (req) => {
  try {
    const res = await Users.create(req.body);
    console.log("RESULTADO DE USER CREATE EN SERVICES", res.dataValues);
    const data = res.dataValues;
    return data;
  } catch (err) {
    console.log("CATCH DE REGISTER SERVICE", err);
  }
};
// login
exports.serviceLogin = async (req) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
      attributes: {
        exclude: ["password", "salt"],
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

//GETME
exports.serviceGetMe = async (req) => {
  try {
    return req.user ? req.user : null;
  } catch (err) {
    console.log(err);
  }
};

//METODOS DE ADMIN --> GETUSERS
exports.serviceGetUsers = async () => {
  try {
    const users = await Users.findAll();
    return users;
  } catch (err) {
    console.log(err);
  }
};

//EDIT USER
exports.serviceEditUser = async (req, next) => {
  try {
    const [affectedRows, updatedUser] = await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    const user = updatedUser[0];
    return user;
  } catch (err) {
    next(err);
  }
};

//PROMOVER UN USER
exports.servicePromoveAdmin = async (req, next) => {
  try {
    const [affectedRows, updatedUser] = await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    const user = updatedUser[0];
    return user;
  } catch (err) {
    next(err);
  }
};

//ELIMINAR UN USER
exports.serviceDeliteUsers = async (req, next) => {
  try {
    const userDelite = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    return userDelite;
  } catch (err) {
    next(err);
  }
};

//VER USUARIO EN PARTICULAR

exports.serviceGetOneUser = async (req, next) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    return user;
  } catch (err) {
    next(err);
  }
};
