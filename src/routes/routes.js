const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const DataController = require('../controllers/DataController');

router.get('/', DataController.index);
router.get('/:id', DataController.byid);

module.exports = router;