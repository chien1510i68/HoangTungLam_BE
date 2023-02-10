const express = require("express");
const router = express.Router();

const registerController = require("../app/controller/RegisterController");

router.get("/create", registerController.create);
router.post("/storeRegister" , registerController.storeRegister);

module.exports = router;
