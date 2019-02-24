import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultSearch extends Component {    
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        let location  = this.props.match.params.location;
        
        let url = "https://communityserver.herokuapp.com/locations/5c71c832e08a410a826e7c46/profiles";
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            this.setState({data: data.locations.profiles});
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message)
        });
    }

    onChange = (e) => {
        console.log('val', e.target.value)
        this.setState({value: e.target.value})
        console.log('val', e.target.value)
    }

    render() {
        console.log('location', this.state)
        const { data } = this.state;    
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">

                    {
                        this.state.data ? this.state.data.map((person, idx) => {
                            return (

                                <div className="col-8" key={idx}>
                                    <div className="card card-inverse" style={{ borderColor: "rgb(233, 228, 228)"}}>
                                        <div className="card-block">
                                            <div className="row">
                                                
                                                <div className="col-md-3 col-sm-3 text-center">
                                                    <img className="user-img" src="https://it.gravatar.com/userimage/3434071/205a00fc16ae537b26b56f40790910fe.jpg?size=140" alt="" /*style={{borderRadius:"50%"}} */ />
                                                </div>  

                                                <div className="col-md-5 col-sm-5">
                                                    <h2 className="card-title">{person.name}</h2>
                                                    <p className="card-text"><strong>Profile: </strong> {person.title}  </p>
                                                    <p className="card-text"><strong>Phone: </strong> {person.phone} </p>
                                                    {/* send it to profile userId is coming from the list to={`/profile/${userId}`}  */} 
                                                    <Link to="/profile" className="btn btn-success details">Details</Link>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <h1>Waiting...</h1>
                    }
                    
                </div> 
            </div>
        )
    }
}

export default ResultSearch;
