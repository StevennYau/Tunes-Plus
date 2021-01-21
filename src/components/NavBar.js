import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const NavBar= ({ token }) => {

   const [userToken, setToken] = useState('');

   useEffect(()=>{
      if(token === '') {
         setToken('');
      } else {
         setToken(token);
      }
   }, [token])


   console.log('navbar token:' + userToken);
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
            </ul>
            {token === '' &&
               <a className="pull-right" href='http://localhost:5000/login'>
                <button>Login With Spotify</button>
               </a>
            }
            {token !== '' &&
               <a className="pull-right" href='/logout'>
                <button >Log Out</button>
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



