import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//import Spotify from 'spotify-web-api-js';
import Genres from "./components/Genres";
import NewReleases from "./components/NewReleases";
import Global50 from "./components/Global50";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cookies from 'js-cookie';
import Search from './components/Search';

//const spotifyWebApi = new Spotify();

function App() {
  
  const [token, setToken] = useState('');
  /*const params = getHashParams();
 
  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    // eslint-disable-next-line
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
    }*/

  useEffect(() => {
  
    console.log("in app useeffect");
    if (token === ''){
      //spotifyWebApi.setAccessToken(params.access_token);
      setToken(Cookies.get('userToken'));
      console.log('ACCESS TOKEN GOTTEN: ' + Cookies.get('userToken'));
    }
  }, [token]);
  
  console.log('app token: ' + token);
  return (
    <div>
      <div 
      className="mt-2">
        <Router>
        <NavBar token={token} />
          <div className="App">
            <Switch>
            <Route exact path ="/home" render={(props) => <Home {...props} token={token} />} />
            <Route exact path ="/genres" render={(props) => <Genres {...props} token={token} />} />
            <Route exact path ="/newReleases" render={(props) => <NewReleases {...props} token={token} />} />
            <Route exact path ="/topSongs" render={(props) => <Global50 {...props} token={token} />} />
            <Route exact path ="/search" render={(props) => <Search {...props} token={token} />} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
export default App;
