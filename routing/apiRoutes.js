const path = require('path');
var friends = require('../app/data/friends');

module.exports = function (app) {
    
    app.get("api/friends", function (req, res) {
        var friendsList = req.body.friends;
        console.log(friendsList);
        return res.json(friendsList);
    });
    app.post('api/friends', function (req, res){
        friendName.push(req.body);
        res.json(true)
      });
};

