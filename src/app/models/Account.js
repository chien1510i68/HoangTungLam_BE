
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema(
    {
      email : {type : String, required: true},
      username: { type: String, require: true },
        password: { type: String, require: true },
        roll : {type : Number, required: true}
    },{
      collection:"accounts"
    }
  );
  
  const AccountModel = mongoose.model("accounts", Account);
  module.exports = AccountModel;
  /*
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
  
  const Account = new Schema(
    {
      email: { type: String, maxLength: 255, require: true },
      username: { type: String, maxLength: 255, require: true },
      password: { type: String, maxLength: 255, require: true },
      roll: { type: Number },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Account", Account);
  */