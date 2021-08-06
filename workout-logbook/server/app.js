let express = require('express');
let app = express();

let logbook = require('./controllers/logcontroller');

app.use('/logbook', logbook);

app.listen(3456, function() {
    console.log("App is listening on port 3456");
});