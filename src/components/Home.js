import React, { Component } from 'react'

export default class NewReleases extends Component {
   constructor(props){
      super(props);
      this.state = {
          loggedIn: props.loggedIn ? true : false
      };
  }

    render() {
        return (
            <div>
               {this.state.loggedIn===false &&
                  //<a href='http://localhost:8888'>
                  <a href='http://localhost:5000/login'>
                  
                  <button>Login With Spotify</button>
                  </a>
               }
            </div>
        )
    }
} 

