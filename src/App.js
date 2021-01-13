import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Genres from "./components/Genres";
import NewReleases from "./components/NewReleases";

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.state ={
      loggedIn: params.access_token ? true: false,
      nowPlaying: {
        name: 'Click the "Check Now Playing" button!',
        image: 'noimage.png'
      }
    }
    if (params.access_token){
      spotifyWebApi.setAccessToken(params.access_token)
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
      <div className="App">
        <div>
          {this.state.loggedIn===false &&
            <a href='http://localhost:8888'>
              <button>Login With Spotify</button>
            </a>
          }
        </div>
        <Genres />
       <NewReleases />
      </div>  
    );
  }
}
export default App;
