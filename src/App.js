import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

require('isomorphic-fetch');
require('es6-promise').polyfill();


class Movie extends Component {
    constructor(props) {
        super(props);
        this.title = 'Default';
        this.release = '01/01/1970';
        this.duration = '42min';
        this.genre = 'None';
        this.synopsis = 'Description'; 
    }
}


class App extends Component {

    constructor(props) {
        super(props);
        
        this.movie = new Movie();
        this.getJSONdata(this.movie);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
        Get JSON movie from server
    **/
    getJSONdata(movie) {
        //TODO: get movie object from server
        movie.title = 'Killing Floor';
        movie.release = '23/07/2018';
        movie.duration = '90min';
        movie.genre = 'Action';
        movie.synopsis = 'Awesome movie.';
        
        fetch('/users.json').then(function(response) {
            return response.json()
        })
        
        return movie;
    }
    
    /**
        Send altered movie to server in JSON
    **/
    setJSONdata(event) {
        alert(event.target.value);
        this.movie.title = event.target.value;
        //TODO: save new movie object to server
    }
  
  
    /**
        Handle submit button event
    **/
    handleSubmit(event) {
        alert(this.movie.title);
        event.preventDefault();
    }  

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <b>This is a very serious project assignment.</b><br></br><br></br>
        </p>
        <form onSubmit={this.handleSubmit}>
        
            Title:<input type="text" name="title" 
                value={this.movie.title} onChange={this.setJSONdata}/>
            <br></br>
            Release date:<input type="text" name="release" value={this.movie.release}/>
            <br></br>
            Duration:<input type="text" name="duration" value={this.movie.duration}/>
            <br></br>
            Genre:<input type="text" name="genre" value={this.movie.genre}/>
            <br></br>
            Synopsis:<input type="text" name="synopsis" value={this.movie.synopsis}/>
            <br></br>
            <input type="submit" value="Submit" />
            <br></br>
        </form>
      </div>
    );
  }
}

export default App;
