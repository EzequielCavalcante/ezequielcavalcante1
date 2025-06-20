const express = require("express");
const path = require("path");
const app = express();
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./database');
const session = require('express-session');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
  secret: 'senha',
  resave: false,
  saveUninitialized: true
}));

app.use('/', authRoutes);

sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(3000, () => console.log("Servidor iniciado em http://localhost:3000"));
});
