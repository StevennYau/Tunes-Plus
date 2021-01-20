import React, { useState, useEffect } from 'react';
import axios from "axios";


const Home = ({ token }) => {
   console.log('home token: ' + token);
   const [user, setUser] = useState(null);
   //const [product, setProduct] = useState('')

   useEffect(() => {
      axios.get("/home")
            .then(response => {
               console.log("sucess reaching home, now recieved");
               console.log(response.data);
               setUser(response.data);
            })
            .catch(error => {
               console.log("error is " + error);
               return error;
            });
   //console.log(user.display_name);

      
      
   }, []);
   
   if (user){
     console.log('user: ' + user[0]);
         console.log(user[0]);
         console.log('user2: ' + user[1]);
         console.log(user[1]);
      return (
         <div>
            <h2>Welcome to Tunes Plus {user[0]["display_name"]}!</h2>
            <div>
               <img className="userPic" src={user[0]["images"][0]["url"]}  alt="user profile picture"/>
            </div>
            <div>
               <p>Current Song/ Most Recent Song: {user[1]["item"]["name"]}</p>

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

export default Home;

