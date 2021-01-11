import React, { Component } from 'react'
import axios from "axios";

export default class Genres extends Component {
    constructor(){
        super();
        this.state = {
            genres: "not yet checked"
        };
    }

    getGenre = () => {
        console.log("in getGenreUpdated");
        axios.get("/getGenre")
            .then(response => {
                console.log("sucess reaching getGenreupdated, now recieved");
                console.log(response);
                this.setState({
                    genres: response.data
                })
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
        console.log("leaving genre updated");
    };

    /*getGenre = () => {
        axios({
            method: "GET",
            url: "https://api.spotify.com/v1/browse/categories",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Bearer + token
            }
          }).then(res => {
            console.log(res.data.categories.items[0].name);
        });
    }*/



    render() {
        console.log("in render");
        return (
            <div>
                <button onClick={this.getGenre}>Get genres</button>
                <h1> {this.state.genres}</h1>
            </div>
        )
    }
} 

