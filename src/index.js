const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const route = require("./routes");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const port = 3000;
const db = require("./config/db");
//Connect DB
db.connect();
// HTTP logger
app.use(express.static(path.join(__dirname, "public")));
// app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));








// Template engine
app.engine(
  "hbs",
  engine({ extname: ".hbs", helpers: { sum: (a, b) => a + b } })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
