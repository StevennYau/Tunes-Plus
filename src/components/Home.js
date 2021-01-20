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
   }, []);
   //0 is user info
   //1 is current song playing
   //2 is top songs
   //3 is top artists
   //4 is top artist images
   if (user){
     console.log('user0 : ' + user[0]);
         console.log(user[0]);
         console.log('user1: ' + user[1]);
         console.log(user[1]);
         console.log('user2:' + user[2]);
         console.log(user[2]);
         console.log('user3: ');
         console.log(user[3]);
      return (
         <div>
            <div className="form-inline">
               <h1>Welcome to Tunes Plus {user[0]["display_name"]}!</h1>
                  {typeof user[0]["images"][0] != 'undefined' && 
                     <div>
                     <img className="userPic" src={user[0]["images"][0]["url"]}  alt="user pfp"/>
                        followers: {user[0].followers.total}
                     </div>
                  }
                  {typeof user[0]["images"][0] == 'undefined' &&
                     <div>
                        <img className="defaultUserPic" src="noprofilepicture.png"  alt="user pfp"/>
                        followers: {user[0].followers.total}
                     </div>
                  }
            <div>
                  <h5>Current Song/ Most Recent Song:</h5>
                  {user[1]["item"] && 
                  <div>
                     <h4>{user[1]["item"]["name"]}</h4>
                     <img className="userPic" src={user[1]["item"].album.images[1].url}  alt="user current playing"/>
                  </div>
                  }
                  {typeof user[1]["item"] == "undefined" &&
                     <div>Please open spotify and play a song </div>
                  }
               </div>
            </div>

            <div>
               <h5>Top 50 Songs</h5>
               <ol className="center">
                    {user[2].map((song, index) =>(
                       <div>
                          <li key={song.toString()}>{song}</li>
                       </div>
                    ))}
                </ol>
            </div>

            <div>
               <h5>Top 10 Artists</h5>
               <ol className="center form-inline">
                    {user[3].map((song, i) =>(
                       <div>
                          <li key={i.toString()}>{user[3][i]}</li>
                          <img alt={song} src={user[4][i]}/>
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

export default Home;

