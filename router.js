const express = require('express');
const router = express.Router();
const controller=require('./controller');



router.post("/storeApi",controller.checkName)
router.post("/getApi",controller.getApiData)

module.exports = router

