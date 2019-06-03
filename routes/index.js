var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');
var userController = require('../controllers/userController');
/* GET home page. */
router.get('/', eventController.getList);

router.get('/login', function(req,resp){
    resp.render('user/login');
});
router.post('login', userController.login);
module.exports = router;
