var friends = require('../app/data/friends');

module.exports = function (app) {
    $("#surveryButton").on("click", function () {
        app.get("public/survey", function(req, res) {
            var survey = req.body.survey;
            return survey;
        });
    })
    
    app.get("api/friends", function (req, res) {
        var friendsList = req.body.friends;
        console.log(friendsList);
        return res.json(friendsList);
    });
    $("#submit").on("click/", function () {
        app.post("api/friends", function (req, res) {
            var newFriend = req.body;
            console.log(newFriend);
            friends.push(newFriend);
            res.json(newFriend);
        });
    });
};

