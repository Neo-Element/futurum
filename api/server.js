const express = require("express");
const app = express();
const routes = require("./routes");
const morgan = require("morgan");
const db = require("./confDb");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("./models/Users");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

app.use("/api", routes);

app.use(
  sessions({
    secret: "futurum",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function(email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            console.log("NO EXISTE EL USUARIO")
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              console.log("ACA ESTA MAL LA CONTRASEÑA")
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});


db.sync({ force:false }).then(() => {
  console.log("La base se sincronizó correctamente");
  app.listen(3001, () => {
    console.log("Server corriendo en localhost:3001");
  });
});
