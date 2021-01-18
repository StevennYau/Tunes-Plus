import React, { Component } from 'react'

export default class NavBar extends Component {
   constructor(props){
      super(props);
      this.state = {
          loggedIn: props.loggedIn ? true : false
      };
  }
  
  render() {
     console.log(this.state.loggedIn);
      return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="http://localhost:3000">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <a className="nav-link" href="/genres">Genres <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                  <a className="nav-link" href="/topSongs">Top Songs <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                  <a className="nav-link" href="/newReleases">New Releases <span className="sr-only">(current)</span></a>
                  </li>
                  
               </ul>
               <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
            </div>
         </nav>
      );
   }
}



