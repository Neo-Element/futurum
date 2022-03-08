const express = require("express");
const app = express();
const routes = require("./routes");
const morgan = require("morgan");
const db = require("./confDb");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("La base se sincronizó correctamente");
  app.listen(3001, () => {
    console.log("Server corriendo en localhost:3001");
  });
});
