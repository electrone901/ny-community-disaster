import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import ResultSearch from './ResultSearch';
import Profile from './Profile';
import landing from '../../images/banner.jpeg';

import md5 from '../../images/md5.JPG';
import FEMA from '../../images/FEMA_logo.png';
import tot from '../../images/team_of_teams.jpg';
import galvanize from '../../images/galvanize.png';
import feedingAmerica from '../../images/feeding_america_logo.png';
import boyScouts from '../../images/boy_scouts.png';
import redCross from '../../images/red_cross.png';
import bbqRelief from '../../images/bbq_relief.jpg';

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
            <div>
                <div className="container-fluids">
                    <div className="back" style={{ backgroundImage : `url(${landing})` }}>>
                        <div className="row">
                            <div className="col-md-8 m-auto">
                            <p className="display-4"> Are you looking for your local community leader? </p>
                            
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

                    <div className="mt-3">
                        <p className="m-auto mt-2" style={{ width: '700px' }}> 
                            “Ensuring culturally-proficient, community-tailored emergency plans helps to save lives.”
                            Baezconde-Garbanati, University of Southern California, Keck School of Medicine
                        </p>
                        <hr/>
                    </div>

                    <img src={md5} style={{width: '300px', height: '100px'}}/>
                    <img src={FEMA} style={{width: '300px', height: '100px'}}/>
                    <img src={tot} style={{width: '300px', height: '100px'}}/>
                    <img src={galvanize} style={{width: '300px', height: '100px'}}/>
                    <img src={feedingAmerica} style={{width: '300px', height: '100px'}}/>
                    <img src={boyScouts} style={{width: '300px', height: '100px'}}/>
                    <img src={bbqRelief} style={{width: '300px', height: '100px'}}/>
                    <img src={redCross} style={{width: '300px', height: '100px'}}/>

                </div>

                {/* <ResultSearch/>
                < Profile/> */}
            </div>
        );
    }
}


export default LocationSearch;