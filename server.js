//DEPENDENCIES

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//EXPRESS CONFIGURATION
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

//ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});