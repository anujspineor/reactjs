import React from 'react';
import PropTypes from 'prop-types';

export class Slider extends React.Component{
	constructor(){
		super();
   
	}
	render () {

      return (
      	<ul className="bxslider">
      	  <li>
            <img src="images/flexslider/slider-bg-1.jpg" alt="img" />
          </li> 
          <li>
            <img src="images/flexslider/slider-bg-2.jpg" alt="img" />
          </li> 
          <li>
            <img src="images/flexslider/slider-bg-3.jpg" alt="img" />
          </li> 
        </ul> 
      );

	}
}
