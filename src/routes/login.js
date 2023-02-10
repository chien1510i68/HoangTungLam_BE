const express = require("express");
const router = express.Router();

const loginController = require("../app/controller/LoginController");

router.get("/create", loginController.create);
router.post("/authorization", loginController.authorization);

module.exports = router;
