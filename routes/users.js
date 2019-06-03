var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/information', userController.create);

router.post('/information', userController.save);

router.get('/information/:id', userController.getDetail);

router.get('/edit/:id', userController.edit);

router.post('/edit/:id', userController.update);

module.exports = router;
