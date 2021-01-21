import React, { useState } from 'react';
import axios from "axios";

const NewReleases= ({ token }) => {
    const [releases, setReleases] = useState([]);
    const [clicked, setClicked] = useState(false);

    const getNewReleases = () => {
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
    };

    return (
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
    )
} 

export default NewReleases;