const express = require('express');
const router = express.Router();
const skillCtrl = require('../controllers/skills');

router.get('/', skillCtrl.index);

router.get('/new', skillCtrl.new);

router.get('/:id', skillCtrl.show);

router.post('/', skillCtrl.create);

router.delete('/:id', skillCtrl.delete);

module.exports = router;