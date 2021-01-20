import React, { useState } from 'react';
import axios from "axios";

const Genres = ({ token }) => {
    const [genres, setGenres] = useState([]);
    const [clicked, setClicked] = useState(false);
    
    const getGenre = () => {
        console.log("in getGenre")  
        if (clicked === true) {
            setClicked(false);
            } else {
            setClicked(true);
        }
        axios.get("/getGenre", {withCredentials: true})
            .then(response => {
                console.log("sucess reaching getGenreupdated, now recieved");
                console.log(response);
                setGenres(response.data)
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
        console.log("leaving genre updated");
    };

    return (
        <div className="app">
            <button onClick={getGenre}>Get genres (toggle)</button>
            
            {clicked === true && 
                <ol className="center">
                    {genres.map((item) =>(
                        <li key={item}>{item}</li>
                    ))}
                </ol>
                }
        </div>
    )
    
} 

  export default Genres;