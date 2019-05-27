var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');

/* GET home page. */
router.get('/', eventController.getList);

module.exports = router;
