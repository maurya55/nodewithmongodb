const express = require('express');
const router = express.Router();
const controller=require('./controller');



router.post("/getApi",controller.checkName)


module.exports = router

