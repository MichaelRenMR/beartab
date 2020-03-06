import React, {Component} from 'react';
import QuicklinkItem from './QuicklinkItem';
import propTypes from 'prop-types'; 

class Quicklinks extends Component {
   	render()
    {
      return (
        <div class='row'> {this.props.quicklinks.map((link) => ( 
        <div class='col'> <br></br><QuicklinkItem key={link.id} link={link}/> </div> ))} </div>
      );
    }
}

/* Prop types */
Quicklinks.propTypes = {
	quicklinks: propTypes.array.isRequired
}

export default Quicklinks;

/*
return (
        <div class='row'> {this.props.quicklinks.map((link) => ( 
        	<div class='col'> <QuicklinkItem key={link.id} link={link}/> </div> ))} </div>
      );

  */
