var Event = require('../models/event');
require('mongoose-pagination');










exports.getList = function (req, resp) {
    var page = req.query.page;
    var limit = req.query.limit || 3;
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