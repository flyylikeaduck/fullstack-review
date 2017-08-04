import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO

    // PAIN POINT: remember how to formulate the AJAX request

    $.ajax({
      type: "POST",
      url: "/repos",
      data: {username: term},

      // success & error only after res.send() from server
      success: function() {
        // manipulate the state repos
        console.log('success!!')
      },
      error: function(error) {
        console.log('error!!', error)
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));