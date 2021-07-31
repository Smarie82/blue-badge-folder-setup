let express = require("express"); //importing requests for later
let app = express(); //Creating an instance of express variable. Firing off function, allowing us to make an Espress app. It gives us access to methods and properties.
let testController = require("./controllers/testcontroller");

let calculatoreController = require("./controllers/calculatorcontroller");

app.use("/test", testController);

app.use("/calc", calculatoreController);

//.use method is a middleware function that allows us to create a pathway. Takes on two arguments.
// app.use("/test", function(req, res) {
//     let response = {message: "This is a test"};
//     res.json(response);
// });

// .listen allows us to "listen" or run on a host/port. (Running on local machine.) Takes on one argument which is the port.
// 65,535 possible port numners on your local machine.
app.listen(3001, function() {
    console.log("App is listening on port 3001");
});
