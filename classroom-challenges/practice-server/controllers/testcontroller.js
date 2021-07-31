let router = require("express").Router(); //.Router() method returns an oject taht contains/allows us to use HTTP requests.
/*
-POST
-PUT
-DELETE
-GET
*/

//grabbing router, using post method (which allows up to "post" to the database. Storing information for later.)
//fist argument is relative pathewau, second is a callback function. req and res stand for request and response.
router.post("/post", function(req, res) {
    let response = { messsage: "This is from the post request"};
    res.json(response); //.json() method sends a JSON response.
})

module.exports = router; //Exporting the modules for usage outside of this file.