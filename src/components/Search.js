import React, { useState } from 'react';
import {Card} from 'antd';

import { Input, List, Avatar } from 'antd';
import 'antd/dist/antd.css';


const { Search } = Input;

const SearchTab = ({ token }) => {
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = (query) => {
    const access_token = token;
    const searchQuery = query;
    console.log("Search Query: " + searchQuery.toString())
    const fetchURL = encodeURI(`q=${searchQuery}`);
    fetch(`https://api.spotify.com/v1/search?${fetchURL}&type=track`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`     
        }
      }
    )
    .then(response => {
      if(!response.ok){
        throw Error("Response Not Ok")
      }
      return response;
    })
    .then(response => response.json())
    .then(({tracks}) => {
      console.log(tracks.items[0].name);
      const results = [];
      tracks.items.forEach(element => {
        let artists = []
        element.artists.forEach(artist => artists.push(artist.name))
        results.push(      
          <List.Item key={element.uri}>
            <List.Item.Meta
              avatar={<Avatar shape='square' size='large' src={element.album.images[0].url} />}
              title={<p href="https://ant.design">{element.name}</p>}
              description={artists.join(', ')}
            />
          </List.Item>);
      });
      setSearchResults(results);
    })
    .catch(error => 
      setSearchResults([])
    )
  }
  
  
    let card;
    if(searchResults.length > 0){
      card = <Card>
        <List itemLayout="horizontal">
          {searchResults}
        </List>
      </Card>;
    }
    else {
      card = <Card hidden={true}/>;
    }
  
    
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <div className="Search">
          <Search
            placeholder="Type in any song, album, or artist you want to search!"
            enterButton="Search"
            size="large"
            onChange={value => getSearchResults(value.target.value)}
            onSearch={value => console.log(value)}
          />
          {card}
        </div>
      </div>
    );
  }

  export default SearchTab;
