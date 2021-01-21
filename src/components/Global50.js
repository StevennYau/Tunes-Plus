import React, { useState } from 'react';
import axios from "axios";

const Global50 = ({ token }) => {
    const [songs, setSongs] = useState([]);
    const [clicked, setClicked] = useState(false);

    const getGlobal50 = () => {
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
    };

    return (
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
    )
} 

export default Global50;

