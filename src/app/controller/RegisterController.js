const Account = require("../models/Account");
class RegisterController {
    create(req, res, next) {
        res.render("account/register");
      }   
      storeRegister(req , res , next){
          const formData = req.body;
          formData.roll = 1
          const account = new Account(formData);
          account
            .save()
            .then(() => res.redirect("/login/create"))
            // .then(
              // console.log(formData)
            // )
            .catch(next);
        }
    
}
module.exports = new RegisterController();