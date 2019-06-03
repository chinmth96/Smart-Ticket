var User = require('../models/user');
var mongoose = require('mongoose');
require('mongoose-pagination');


exports.create = function (req, resp) {
    var responseData = {
        'action': '/user/information',
        'obj': new User()
    }
    resp.render('user/informationForm', responseData);
}
exports.save = function (req, resp) {
    var obj = new User(req.body);
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/');
        }
    });
}

exports.getDetail = function (req, resp) {
    User.findById(req.params.id, function (err, obj) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            var responseData = {
                'obj': obj
            };
            resp.render('user/informationForm', responseData);
        }
    });
}
exports.edit = function (req, resp) {
    User.findById(req.params.id, function (err, obj) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            var responseData = {
                'action': '/user/edit/' + req.params.id,
                'obj': obj
            };
            resp.render('user/informationForm', responseData);
        }
    });
}
exports.update = function (req, resp) {
    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: false},
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.redirect('/');
            }
        });
}
exports.login = function (req,resp) {
    User.findOne({userName: req.body.userName, password: req.body.password},function(err,obj){
        if (err) {
            return resp.render('/login',{title: 'incorrect'});
        } else {
            var responseData = {
                'action': '/user/' + req.params.id,
                'obj': obj
            };
            resp.render('index', responseData);
        }
    }
)
}