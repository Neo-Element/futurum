const UserService= require("../services/usersService")

// REGISTER USER COMUN
exports.registerUsers = async (req, res) => {
  console.log("ESTO ENTRO A CONTROLLERS Y FUNCA ");
    const data= await UserService.serviceResgisterUser(req)
    console.log("RESPUESTA DE SERVICE", data)
   return res.sendStatus(201)
};


// LOGIN 
exports.loginUsers = async(req, res) => {
  console.log("LOGUEADO EN CONTROLLERS");
  const user= await UserService.serviceLogin(req)
  return res.send(user);
};


//LOGOUT USER COMUN falta ponerlo como service si no toca la db?
exports.logOutUsers = (req, res) => {
  req.logOut();
 res.status(200).send({});
};


//DEVUELVE USUARIO ME LOGUEADO 
exports.getMe = async (req, res) => {
  const user= await UserService.serviceGetMe(req)
  return user? res.send(user): res.sendStatus(401)
  
};


//METODOS DE ADMIN ---> GETUSERS
exports.getUsers = async (req, res, next) => {
  console.log("GETUSERS DESDE CONTROLLERS");
  const users= await UserService.serviceGetUsers()
  return  res.send(users)
  
};


//EDIT USER
exports.editUsers = async (req, res, next) => {
  console.log("EDIT USERS DESDE CONTROLLERS");
  const updatedUser= await UserService.serviceEditUser(req, next)
 return  res.status(200).send(updatedUser)
}
   


//PROMOVER UN USER
exports.promoveAdmin = async (req, res, next) => {
  console.log("PROMOVIENDO USUARIO DESDE CONTROLLERS");
  const updatedAdmin= await UserService.servicePromoveAdmin(req, next)
 return res.status(200).send(updatedAdmin)
};


// ELIMINAR UN USER
exports.deliteUsers = async (req, res, next) => {
  console.log("BORRANDO USERS DESDE CONTROLLERS");
  await UserService.serviceDeliteUsers(req, next)
    return res.sendStatus(202)
  
};

// VER USUARIO EN PARTICULAR
exports.getOne = async (req, res, next) => {
  console.log("GET UN USER DESDE CONTROLLERS");
  const user= await UserService.serviceGetOneUser(req,next)
   return res.send(user)
}
