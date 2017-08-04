const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  title: String,
  owner: String,
  url: String
  // read article about document oriented db
});

// step 2: compiles schema into a Model (which is a class with which we construct docs.)
let Repo = mongoose.model('Repo', repoSchema);

// each doc will be a repoSet for each particular repo with properties declared in my schema.
// let consortium = new Repo({ id: 182221276, etc etc })



let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos.forEach(repoObj => {
    let repoDoc = new Repo({
      id: repoObj.id,
      title: repoObj.name,
      owner: repoObj.owner.login,
      url: repoObj.html_url
    });

    repoDoc.save(err => {
      if (err) return console.err(err);
    });
  })

  // to avoid duplicate repos: use repos.id

}

// export default
module.exports.save = save;

// route on frontend, which sends the req to server on that given route
// which will pass on the parameters into the route
