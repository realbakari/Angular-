var express = require("express");
var app = express();
var server = require("http").Server(app);

// middleware
var bodyParser = require("body-parser");

// import routes
var apiRoute = require("./routes/api");
var cors = require("cors");

app.use (bodyParser.urlencoded ({extended: true}));

// use routes
app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRoute);

server.listen(3000, () => {
    console.log ("Node Server!");
    console.log("Server running at localhost:" + server.address().port);
});
