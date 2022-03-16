const { Users } = require("../models");

// REGISTER USER COMUN
exports.registerUsers = async (req, res) => {
  console.log("ESTO ENTRO A CONTROLLERS Y FUNCA ");
  try{
     await Users.create(req.body)
     res.sendStatus(201);}
    catch (err){ 
      console.log(err)};
};
// LOGIN
exports.loginUsers = (req, res) => {
  console.log("LOGUEADO EN CONTROLLERS");
  res.send(req.user);
};
//LOGOUT USER COMUN
exports.logOutUsers = (req, res) => {
  console.log("LOGOUT DESDE CONTROLLERS");
  req.logOut();
  res.status(200).send({});
};
//DEVUELVE USUARIO LOGUEADO
exports.getMe = (req, res) => {
  console.log("GETME DESDE CONTROLLERS");
  if (!req.user) {
    return res.sendStatus(401);
  }else{
   console.log(req.user)   
  res.send(req.user)}
  
};

//METODOS DE ADMIN ---> GETUSERS
exports.getUsers = async (req, res, next) => {
  console.log("GETUSERS DESDE CONTROLLERS");
  try{
    const users= await Users.findAll()
     res.send(users);
  }
   catch(next){
     await next
   };
};
//EDIT USER
exports.editUsers = async (req, res, next) => {
  console.log("EDIT USERS DESDE CONTROLLERS");
  try{
     const [affectedRows, updatedUser]=await
    Users.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
  res.status(200).send(updatedUser)}
    
    catch(err){
      next(err)
    };
};

//PROMOVER UN USER
exports.promoveAdmin = async (req, res, next) => {
  console.log("PROMOVIENDO USUARIO DESDE CONTROLLERS");
  try{
    const [affectedRows, updated]= await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    })
    res.send(updated)// updated[0] o solo updated[0]
  }
   catch(err){
     next(err)
   };
};
// ELIMINAR UN USER
exports.deliteUsers = async (req, res, next) => {
  console.log("BORRANDO USERS DESDE CONTROLLERS");
  try{
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.sendStatus(202)
  }
    catch(err){
      next(err)
    };
};

// VER USUARIO EN PARTICULAR
exports.getOne = async (req, res, next) => {
  console.log("GET UN USER DESDE CONTROLLERS");
  try{
    const user= await Users.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.send(user)
  }
    catch(err){
      next(err)
    };
};
