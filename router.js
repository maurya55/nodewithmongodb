const express = require('express');
const router = express.Router();
const controller=require('./controller');



router.get("/getApi",controller.checkName)


module.exports = router