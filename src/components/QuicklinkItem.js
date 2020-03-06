import React, {Component} from 'react'
import propTypes from 'prop-types';

export class QuicklinkItem extends Component {
  render() {
    return (
    	
	    <div class="card">
	    	<img class="card-img-top" src={this.props.link.image}></img>
	    	
		  	<div class="card-body">
		  		<h2>{this.props.link.title }</h2>
		    	<a href={this.props.link.link} class="button stretched-link">{ this.props.link.info }</a>

		  	</div>
		  	
		</div>
		
    )
  }
}

/* Prop types */
QuicklinkItem.propTypes = {
	quicklinkitem: propTypes.object.isRequired
}


export default QuicklinkItem

/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/