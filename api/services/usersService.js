const { Users } = require("../models");

class UsersService{


  static async serviceResgisterUser(req){
    try {
      const res = await Users.create(req.body);
      console.log("RESULTADO DE USER CREATE EN SERVICES", res.dataValues);
      const data = res.dataValues;
      return data;
    } catch (err) {
      console.log("CATCH DE REGISTER SERVICE", err);
    }
  };


  static async serviceLogin(req){
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
  
  static async serviceGetMe(req){
    try {
      return req.user ? req.user : null;
    } catch (err) {
      console.log(err);
    }      
  };
  
  //METODOS DE ADMIN --> GETUSERS
  static async serviceGetUsers(){
    try {
      const users = await Users.findAll();
      return users;
    } catch (err) {
      console.log(err);
    }
  };
  

  static async serviceEditUser(req, next){
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
  
  
  static async servicePromoveAdmin(req, next){
    try {
      const adminRole = req.body.isAdmin;
      if (adminRole) {
       await Users.update(
          {
            isAdmin: false,
          },
          {
            where: { id: req.params.id },
          }
        )
        }
       else {
       await Users.update(
          {
            isAdmin: true,
          },
          {
            where: { id: req.params.id },
          }
        )
      }
    }
   catch (err) {
      next(err);
    }
  };
  
 
  static async serviceDeliteUsers(req, next){
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
  
  
  
 static async serviceGetOneUser(req, next){
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
}
module.exports= UsersService;