app.get("/api/friends", function (req, res) {
    var friendsList = req.params.friends;

    console.log(friendsList);

    for (var i = 0; i < friends.length; i++) {
        if (friendsList === friendsLlist[i].routeName) {
            return res.json(friendsList[i]);
        }
    }

    return res.json(false);
});
app.post("api/friends", function (req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newFriend);
    
    friends.push(newFriend);

    res.json(newFriend);
});

