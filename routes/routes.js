const express = require("express");
const router = express.Router();


let sendmail = require('../controllers/sendMail')

router.get('/mail',sendmail.sendMail.bind())



  module.exports.routes = router;