const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = {
  li: () => {
    //passing express() function call
    return app;
  },
  pi: () => {
    //passing path function
    return path;
  },
  friend: () => {
      return (friends.data);
  }
};

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const friends = require("./app/data/friends");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const html = htmlRoutes.routes;
const api = apiRoutes.routes;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  html();
  api();
//   console.log(friends.data)
});
