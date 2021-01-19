import React from 'react'

const Home = ({ token }) => {
   console.log('home token: ' + token);
   return (
      <div>Hello, token is {token}</div>
   )
}

export default Home;

