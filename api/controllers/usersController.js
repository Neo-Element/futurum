const UserService = require("../services/usersService");

class UserController{

  static async registerUsers(req, res){
    await UserService.serviceResgisterUser(req);
    return res.sendStatus(201);
  };
  
 
  static async loginUsers(req, res){
    const user = await UserService.serviceLogin(req);
    return res.send(user);
  };
  
  
  static async logOutUsers(req, res){
    req.logOut();
    return res.status(200).send({});
  };
  
  static async getMe (req, res){
    const user = await UserService.serviceGetMe(req);
    return user ? res.send(user) : res.sendStatus(401);
  };
  
 
  static async getUsers(req, res, next){
    const users = await UserService.serviceGetUsers();
    return users ? res.send(users).status(200) : res.sendStatus(500);
  };
  
  
  static async editUsers(req, res, next){
    const updatedUser = await UserService.serviceEditUser(req, next);
    return res.status(200).send(updatedUser);
  };
  
  
  static async promoveAdmin(req, res, next){
     await UserService.servicePromoveAdmin(req, next);
    return res.sendStatus(200)
  };
  
  
  static async deliteUsers(req, res, next){
    await UserService.serviceDeliteUsers(req, next);
    return res.sendStatus(202);
  };
  
  
  static async getOneUsers(req, res, next){
    const user = await UserService.serviceGetOneUser(req, next);
    return res.send(user);
  };
}
module.exports= UserController;