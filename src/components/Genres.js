import React, { useEffect, useState } from 'react';
import axios from "axios";

const Genres = ({ token }) => {
    const [genres, setGenres] = useState(null);
    //const [clicked, setClicked] = useState(false);
    
    /*const getGenre = () => {
        if (clicked === true) {
            setClicked(false);
            } else {
            setClicked(true);
        }
        axios.get("/getGenre", {withCredentials: true})
            .then(response => {
                setGenres(response.data)
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    };*/
    useEffect(() => {
        axios.get("/getGenre", {withCredentials: true})
            .then(response => {
                setGenres(response.data)
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    }, [])


    if (genres){
        return (
            <div className="app">
            <div>
              <h5>Genres</h5>
             <ol className="center form-inline">
                   {genres[0].map((name, index) =>(
                      <div>
                         <li className="genreText" key={genres.toString()}>{name}</li>
                         <img className="genreImage" alt={name} src={genres[1][index]} />
                      </div>
                   ))}
                   </ol>
                   </div>
           {/*<button onClick={getGenre}>Get genres (toggle)</button>
           
           {clicked === true && 
               <ol className="center">
                   {genres.map((item) =>(
                       <li key={item}>{item}</li>
                   ))}
               </ol>
               }*/}
       </div>
        )
     } else {
        return(
           <div>
              <h1>
                 Please Log In to View Spotify data!
              </h1>
           </div>
        )
     }
  }
   
    


  export default Genres;