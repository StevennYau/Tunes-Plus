import React, { Component } from 'react'
import axios from "axios";

export default class NewReleases extends Component {
    constructor(){
        super();
        this.state = {
            releases: [],
            clicked: false
        };
    }

    getNewReleases = () => {
        this.setState({
            clicked: true
        });
        axios.get("/getNewReleases")
            .then(response => {
                console.log(response.data);
                this.setState({
                    releases: response.data
                })
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.getNewReleases}>Get releases</button>
                {this.state.clicked===true && 
                    <ol>
                        {this.state.releases.map((release) =>(
                            <li key={release}>{release}</li>
                        ))}
                    </ol>
                }
            </div>
        )
    }
} 

