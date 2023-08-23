const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log("Router is setup and running")
router.get('/',homeController.home);


module.exports = router;