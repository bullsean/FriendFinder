
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        res.json(friendsData);
    });
};