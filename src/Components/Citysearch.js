import React, { Component } from 'react';
import axios from "axios";

export default class Citysearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            city: null,
            newCity: []
        };
        this.handleCityChange = this.handleCityChange.bind(this);
    }

    handleCityChange(events){
        this.setState({
            city: events.target.value
        });
        const url = `http://ctp-zip-api.herokuapp.com/city/`;
        axios.get(url + events.target.value)
        .then((response) => {
            const data = response.data;
            this.setState({newCity: data});
        })
        .catch((err) => console.log(err));
    }


    render() {
        let display;
            display = (
            <div className = "search">
                <label htmlFor="zip">Enter a city name: </label>
                <input placeholder="SPRINGFIELD" type="text" value={this.state.city} onChange = {this.handleCityChange} ></input>
            </div>
               );
               return (
               <div>
               <div>
                   {display}
               </div>
               <div className = "zip">
                   {this.state.newCity.map(zip => {
                       return (
                       <div>
                           {zip.LocationText}<br></br>
                           <br></br>
                       </div>)
                   })
               }
               </div>
               </div>
               )
           }
       }