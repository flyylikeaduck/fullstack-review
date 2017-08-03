const express = require('express');
let app = express();
var bodyParser = require('body-parser');

//middleware:
app.use(express.static(__dirname + '/../client/dist'));
// REMEMBER TO ALWAYS USE:
// https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // PAIN POINT: how to access the data that I sent in my ajax POST? - use bodyParser!

  console.log('BODYY', req.body)
  console.log('data!', req.body.username);


  res.send();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

