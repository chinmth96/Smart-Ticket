var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');


/* GET users listing. */
router.get('/information', eventController.create);

router.post('/information', eventController.save);

router.get('/edit/:id', eventController.edit);

router.post('/edit/:id', eventController.update);

router.get('/list', eventController.getListEvent);

router.get('/detail/:id', eventController.detail);

module.exports = router;
