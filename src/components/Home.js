import React, { useState } from 'react';
import axios from "axios";


const Home = ({ token }) => {
   console.log('home token: ' + token);
   const [user, setUser] = useState([]);

   if (token !== '' ){
      axios.get("/home")
               .then(response => {
                  console.log("sucess reaching home, now recieved");
                  console.log(response);
                  setUser(response.data)
               })
               .catch(error => {
                  console.log("error is " + error);
                  return error;
               });
   } 

   console.log(user);

   if (token === ''){
      return(
         <div>
            <h1>
               Please Log In to View Spotify data!
            </h1>
         </div>
      )
   } else {
   return (
      <div>
         <h2>Welcome, {user}</h2>
      </div>
   )
   }
}

export default Home;

