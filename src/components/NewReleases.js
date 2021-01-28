import React, { useState, useEffect } from 'react';
import axios from "axios";

const NewReleases= ({ token }) => {
    const [releases, setReleases] = useState(null);

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
                         <li className="GSongText" key={song.toString()}>{song}</li>
                         <img className="GSongImage" alt={song} src={releases[1][index]} />
                      </div>
                   ))}
                   </ol>
           </div>
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

export default NewReleases;