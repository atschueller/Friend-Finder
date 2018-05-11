const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
var friends = require('../app/data/friends.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

require('../app/routing/api-routes.js')(app);
require('../app/routing/html-routes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});