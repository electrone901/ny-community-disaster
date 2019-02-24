import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import FilterDeals from './FilterDeals';
// import AllDeals from './AllDeals';
import stockImage from '../../img/stocks.png';

class Deals extends Component{
  render(){

      return(
          <div className="container">
              {/* <FilterDeals />
              <AllDeals /> */}

              <h1>LAnding</h1>
              
              <img className="img-fluid" style={{width: '500px', height: '350px'}} src={stockImage} alt="Stocks" />

          </div>
      );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Deals);

