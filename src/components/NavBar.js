import React from 'react';
import { Link } from 'react-router-dom'
//import cookies from 'js-cookie';

const NavBar= ({ token }) => {
   
   const deleteAllCookies =() => {
      var cookies = document.cookie.split(";");
  
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }

   console.log('navbar token:' + token);
   return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
         <Link className="navbar-brand logo" to="/home">
         <img className="pull-left" src="logo.png" alt="logo" /> 
         Tunes Plus</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
               <Link className="nav-link" to="/genres">Genres <span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item active">
               <Link className="nav-link" to="/topSongs">Top Songs <span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item active">
               <Link className="nav-link" to="/newReleases">New Releases <span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item active">
               <Link className="nav-link" to="/search">Search <span className="sr-only">(current)</span></Link>
               </li>
            </ul>
            {typeof token == 'undefined' &&
               <a className="pull-right" href='http://localhost:5000/login'>
                <button>Login With Spotify</button>
               </a>
            }
            {typeof token != 'undefined' &&
               <a className="pull-right" href='/logout'>
                <button onClick={deleteAllCookies}>Log Out</button>
               </a>
            } 
            {/*<form className="form-inline my-2 my-lg-0">
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>*/}
         </div>
      </nav>
   );
}

export default NavBar;



