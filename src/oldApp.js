import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Genres from "./components/Genres";
import NewReleases from "./components/NewReleases";
import Global50 from "./components/Global50";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.state ={
      loggedIn: params.access_token ? true: false,
    }
    if (params.access_token){
      spotifyWebApi.setAccessToken(params.access_token)
      console.log(params.access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    // eslint-disable-next-line
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  componentDidMount() {
    console.log("in mount");
    
  }

  render() {
    return (
      <div>
        <NavBar loggedIn={this.state.loggedIn} />
        <Router>
          <div className="App">
            <Switch>
            <React.Fragment>
            <Route exact path ="/" loggedIn={this.state.loggedIn} component={Home} />
            <Route exact path ="/genres" component={Genres} />
            <Route exact path ="/newReleases" component={NewReleases} />
            <Route exact path ="/topSongs" component={Global50} />
            </React.Fragment>
            <Genres />
            <NewReleases />
            <Global50 />
          </Switch>
          </div>
        </Router>
      </div>  
    );
  }
}
export default App;
