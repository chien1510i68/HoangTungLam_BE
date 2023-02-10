const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Datatest", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully");
  } catch (erorr) {
    console.log("Fail !!!");
  }
}

module.exports = { connect };
