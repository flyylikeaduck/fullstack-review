const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  owner: String,
  url: String
  // read article about document oriented db
});

// step 2: compiles schema into a Model (which is a class with which we construct docs.)
let Repo = mongoose.model('Repo', repoSchema);

// each doc will be a repoSet for each particular repo with properties declared in my schema.
let consortium = new Repo({ id: 182221276, etc etc })


let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // utilized in index.jsx --> post


}

module.exports.save = save;

// route on frontend, which sends the req to server on that given route
// which will pass on the parameters into the route