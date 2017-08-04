const express = require('express');
let app = express();

//added:
const bodyParser = require('body-parser');
const getRepos = require('../helpers/github.js')
const db = require('../database/index.js')

//middleware:
app.use(express.static(__dirname + '/../client/dist'));
// REMEMBER TO ALWAYS USE:
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // PAIN POINT: how to access the data that I sent in my ajax POST? -> use bodyParser!

  console.log('BODYY', req.body)
  console.log('data!', req.body.username);

  // PAIN POINT: using promises --> only use promises when you want to return another promise (method chaining), else require bluebird and use Promise.resolve

  // check to see if req.body.username exists in db already
    // if it does:
      // send it back to client
      // through mongoose
    // else:
      // get REPOS from github API
        // save repos to db
  if ()

  getRepos.getReposByUsername(req.body.username)
  .then(repos =>

   db.save(repos))
  .error(err =>
    // pass error back, and 404
   res.send())
  //.catch(next => res.send())


  // old code:
  //getRepos.getReposByUsername(req.body.username), function(repos) {
  //     console.log('testing repos: ', repos)
  //     var repoNames = repos.map(repoObj => repoObj.name)
  //     console.log('array of repoNames:', repoNames)

  //   db.save(repoNames);
  // })

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

