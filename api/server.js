const express = require("express");
const app = express();
const routes = require("./routes");
const morgan = require("morgan");
const db = require("./confDb");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("./passport/localStrategy");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

app.use(
  sessions({
    secret: "futurum",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("La base se sincronizó correctamente");
  app.listen(3001, () => {
    console.log("Server corriendo en localhost:3001");
  });
});
