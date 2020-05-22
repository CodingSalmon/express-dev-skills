const express = require('express');
const router = express.Router();
const skillCtrl = require('../controllers/skills');
/* GET home page */
router.get('/', skillCtrl.home);

module.exports = router;