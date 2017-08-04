const request = require('request-promise');
const config = require('../config.js');

// REMEMBER: request module is asynchronous

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('hi from github.js!!', username)

  let options = {
    // check in data.json for desired API url path!!
    uri: `https://api.github.com/users/${username}/repos`,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    json: true
  };

  // return promise of a request to the place where getReposByUsername was called!
  return request(options);
}

module.exports.getReposByUsername = getReposByUsername;