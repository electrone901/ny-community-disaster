import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import ResultSearch from './ResultSearch';
import Profile from './Profile';

class LocationSearch extends Component{
    constructor(){
        super();
        this.state = {
            location: ''
        };
        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    // onSubmit(e){

    //     e.preventDefault();
    //     let location  = this.state.location;
    //     let url = "";
    //     fetch(url + location)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then((data) => {
    //         console.log('data coming', data)
    //         // this.setState({data: data.foods});
    //     })
    //     .catch((err) => {
    //         console.log('There was a problem with your fetch request' + err.message)
    //     });
    // }
    
    render(){
        console.log('state', this.state)
        const {errors} = this.state;
        return(
            <div className="login">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto">
                      <h1 className="display-4 text-center">In what city are you looking for your leader community? </h1>
                      
                      <form onSubmit={this.onSubmit}>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Location, city or neighborhood" 
                                    name="location"  
                                    value={this.state.location} 
                                    onChange = {this.onChange}
                                    className="form-control"
                                />
                                <span className="input-group-btn">
                                    <Link to={`/resultSearch/${this.state.location}`}>
                                    {/* <Link to="/login"> */}
                                    <input 
                                        type="submit" 
                                        name="commit" 
                                        value="Search" 
                                        className="btn btn-primary" 
                                        data-disable-with="Search" />
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>

                {/* <ResultSearch/>
                < Profile/> */}
            </div>
        );
    }
}


export default LocationSearch;