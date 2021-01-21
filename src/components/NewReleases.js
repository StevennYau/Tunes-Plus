import React, { useState, useEffect } from 'react';
import axios from "axios";

const NewReleases= ({ token }) => {
    const [releases, setReleases] = useState(null);
    //const [clicked, setClicked] = useState(false);

    /*const getNewReleases = () => {
        if (clicked === true) {
            setClicked(false);
            } else {
            setClicked(true);
        }
        axios.get("/getNewReleases")
            .then(response => {
                setReleases(response.data);
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    };*/

    useEffect(() => {
        axios.get("/getNewReleases")
            .then(response => {
                setReleases(response.data);
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    }, [])

    if (releases){
        return (
            <div className="app">
            <div>
              <h5>Latest Releases</h5>
             <ol className="center form-inline">
                   {releases[0].map((song, index) =>(
                      <div>
                         <li className="GSongTest" key={song.toString()}>{song}</li>
                         <img className="GSongImage" alt={song} src={releases[1][index]} />
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
            <button onClick={getNewReleases}>Get releases (toggle)</button>
            {clicked===true && 
                <ol className="center">
                    {releases.map((release) =>(
                        <li key={release}>{release}</li>
                    ))}
                </ol>
            }
        </div>
    )*/

export default NewReleases;