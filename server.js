// Load the express module (Where do you think this comes from?)
var express = require("express");

var session = require("express-session")

// invoke var express and store the resulting application in var app
var app = express();


app.use(express.static(__dirname +'/public'));
app.use(session({secret: 'jfeohfoelfw'}));

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// root route
app.get('/', function (req, res){
    res.render('index.ejs', {});
});
// route to process new user form data:
app.get('/result', function (req, res){
    res.render('result.ejs', {data: req.session.data});
//code to add user to db goes here!
})

app.post('/submit', function (req, res){
    console.log("POST DATA \n\n", req.body)
    req.session.data = req.body;
    res.redirect('/result');
})

app.get('/', function (req, res){
    
    res.redirect('/');
})

  // Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
  


