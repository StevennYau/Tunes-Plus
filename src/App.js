import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Genres from "./components/Genres";
import NewReleases from "./components/NewReleases";
import Global50 from "./components/Global50";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const spotifyWebApi = new Spotify();

function App() {
  const params = getHashParams();
  const [token, setToken] = useState(params.access_token? params.access_token: '');

  if (params.access_token){
    spotifyWebApi.setAccessToken(params.access_token)
    console.log('spotfiy access token: ' + params.access_token);
    
  }

  function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  // eslint-disable-next-line
  while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
  }


/* useEffect(() => {
  console.log('in mount')
  const userToken = localStorage.getItem('user-token');
  if (userToken) {
    setToken(userToken);
  }
}, []);


useEffect(() => {
  console.log('mount and update');
  localStorage.setItem('user-token', token);
});*/

useEffect(() => {
  const userToken = localStorage.getItem("user-token") 
  setToken(userToken);
}, [])

useEffect(() => {
  localStorage.setItem("user-token", token)
}, [token])

  
  return (
    <div>
      <div 
      className="mt-2">
        <Router>
        <NavBar token={token} />
          <div className="App">
            <Switch>
            <Route exact path ="/" render={(props) => <Home {...props} token={token} />} />
            <Route exact path ="/genres" component={Genres} />
            <Route exact path ="/newReleases" component={NewReleases} />
            <Route exact path ="/topSongs" component={Global50} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
export default App;
