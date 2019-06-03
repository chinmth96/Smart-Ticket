var Event = require('../models/event');
require('mongoose-pagination');


exports.create = function (req, resp) {
    var responseData = {
        'action': '/event/information',
        'obj': new Event()
    }
    resp.render('event/eventForm', responseData);
}
exports.getList = function (req, resp) {
    var page = req.query.page;
    var limit = req.query.limit || 30;
    var responseData;
    Event.find().where('status').ne(-1).paginate(parseInt(page), parseInt(limit),
        function (err, listData, totalItem) {
            responseData = {
                'listData': listData,
                'totalPage': Math.ceil(totalItem / limit),
                'page': page,
                'limit': limit
            };
            resp.render('index', responseData);
        });
}

exports.save = function (req, resp) {
    var obj = new Event(req.body);
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/');
        }
    });
}

exports.getDetail = function (req, resp) {
    Event.findById(req.params.id, function (err, obj) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            var responseData = {
                'obj': obj
            };
            resp.render('event/eventForm', responseData);
        }
    });
}
exports.delete = function (req, resp) {
    Event.findByIdAndUpdate(
        req.params.id,
        {
            'status': -1
        },
        {
            new: false
        },
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.redirect('/event/list');
            }
        });
}
exports.edit = function (req, resp) {
    Event.findById(req.params.id, function (err, obj) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            var responseData = {
                'action': 'event/edit/' + req.params.id,
                'obj': obj
            };
            resp.render('event/eventForm', responseData);
        }
    });
}
exports.update = function (req, resp) {
    Event.findByIdAndUpdate(
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
exports.getListEvent = function (req, resp) {
    var page = req.query.page;
    var limit = req.query.limit || 20;
    var responseData;
    Event.find().where('status').ne(-1).paginate(parseInt(page), parseInt(limit),
        function (err, listData, totalItem) {
            responseData = {
                'listData': listData,
                'totalPage': Math.ceil(totalItem / limit),
                'page': page,
                'limit': limit
            };
            resp.render('event/listevent', responseData);
        });
}

exports.detail = function (req, resp){
    Event.findById(req.params.id, function (err, obj) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            var responseData = {
                'obj': obj,
            };
            resp.render('event/SingleEvent', responseData);
        }
    });

}