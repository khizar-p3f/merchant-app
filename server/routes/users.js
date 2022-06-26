var express = require('express');
const userController = require('../controller/users');
var router = express.Router();

router.get("/",userController.getUserData)
router.get("/getUserData",userController.getUserData)
router.get("/getUsersList",userController.getUsersList)

module.exports = router;