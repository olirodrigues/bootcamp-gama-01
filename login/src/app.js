const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./database');

var path = require('path');
const app = express();
var myLogger = function (req, res, next) {
    console.log(req.body.password)
    if (req.body.password && req.body.username){
        console.log('fazendo login');
        next();
    }
    else if (req.session){
        if (req.session.login){
            console.log('LOGGED 1');
            next();
        } else
        {
            // res.status(400).json("Você não está logado");
            console.log('NOT LOGGED 1');
            next();
        }
    }
    
  };
  
  

var Secret_String = "fghjkl456cvbn78";

// app.use(session({secret: Secret_String}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(
    cors({
      origin: true,
      credentials: true,
      optionsSuccessStatus: 200
  }))

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
      }, // postgres session store
    }),
  );

db.hasConection();
//app.use(myLogger);
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(routes);



app.listen(3000, console.log('Servidor rodando na porta 3000'));