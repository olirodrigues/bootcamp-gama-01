const express = require('express');
const session = require('express-session');
const routes = require('./routes');
// const db = require('./database');

const app = express();

//db.hasConection();

var Secret_String = "fghjkl456cvbn78";

  app.use(
    session({
      key: 'sid',
      secret: Secret_String,
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: '/',
        sameSite: 'none',
        httpOnly: true,
        secure: false,
        maxAge: 1000000000, // ten seconds, for testing
      }, 
    }),
  );

app.use(express.json());
app.use(routes);

app.listen(3000, console.log('Servidor rodando na porta 3000'));
