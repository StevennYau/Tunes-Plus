import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';

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

  getNowPlaying(){
    spotifyWebApi.getMyCurrentPlayingTrack()
      .then((response) => {
        if (typeof response.item === 'undefined') {
          this.setState({
            nowPlaying: {
              name: 'Please play a song first',
              image: 'error.png'
            }
          })
        } else {
          this.setState({
            nowPlaying: {
              name: 'Now Playing: ' + response.item.name,
              image: response.item.album.images[0].url
            }
          })
        }
        
      })

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
        <div>{ this.state.nowPlaying.name } </div>
        <div>
          <img src={ this.state.nowPlaying.image } alt='song' style={{ width: 100 }} />
        </div>
        <button onClick={() => this.getNowPlaying()}>
          Check Now Playing
        </button>
      </div>  
    );
  }
}

export default App;
