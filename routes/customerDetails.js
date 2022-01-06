var express = require("express");
var router = express.Router();
var customerDetailsModule = require('../module/customerDetailsModule');

router.get("/get", customerDetailsModule.getcustomerDetails);
router.post("/create", customerDetailsModule.createCustomer);
router.get("/customerStatus", customerDetailsModule.createCustomer);





module.exports = router;