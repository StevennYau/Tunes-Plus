import React, { useState, useEffect } from 'react';
import axios from "axios";

const Global50 = ({ token }) => {
    const [songs, setSongs] = useState(null);
    //const [clicked, setClicked] = useState(false);

    /*const getGlobal50 = () => {
        if (clicked === true) {
            setClicked(false);
            } else {
            setClicked(true);
        }
        axios.get("/getGlobal50")
            .then(response => {
                setSongs(response.data);
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    };*/

    useEffect(() => {
        axios.get("/getGlobal50")
            .then(response => {
                setSongs(response.data);
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    }, [])

    if (songs){
        return (
            <div className="app">
            <div>
              <h5>Current Global 50 Songs</h5>
             <ol className="center form-inline">
                   {songs[0].map((song, index) =>(
                      <div>
                         <li className="GSongTest" key={song.toString()}>{song}</li>
                         <img className="GSongImage" alt={song} src={songs[1][index]} />
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
    /*return (
        <div>
            <button onClick={getGlobal50}>Get Global Top 50 Songs (toggle)</button>
            {clicked === true && 
                <ol className="center">
                    {songs.map((item) =>(
                        <li key={item}>{item}</li>
                    ))}
                </ol>
            }
        </div>
    )*/


export default Global50;

