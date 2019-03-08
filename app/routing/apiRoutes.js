
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores)

        var currentFriendScores = req.body.scores;

        // var convertToNum = currentFriendScores.split(',').map(function(item) {
        //     return parseInt(item, 10)
        // })
        friendsData.push(req.body);
        //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        //PSEUDOCODE: create a new variable which holds all of the numbers from the survey responses and then parseInt, compare that with the input that the user submitted by putting each of the answers into a new string, parseInt. Subtract and get the difference from each of the existing users in the API. After it loops through each user to get the differences, return the indexOf the lowest difference and send that through in the space that says "randomNum" currently.

        var randomNum = Math.floor(Math.random() * 10);

        res.json(friendsData[randomNum]);
    });
};