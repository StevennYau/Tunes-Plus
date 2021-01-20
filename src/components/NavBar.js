import React from 'react'
import { Link } from 'react-router-dom'

const NavBar= ({ token }) => {

   console.log('navbar token:' + token);
   return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
         <img src="logo.png" /> 
         <Link className="navbar-brand logo" to="/home">Tunes Plus</Link>
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
            </ul>
            {token === '' &&
               <a href='http://localhost:5000/login'>
                <button>Login With Spotify</button>
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



