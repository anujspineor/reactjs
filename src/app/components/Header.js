import React from 'react';
import PropTypes from 'prop-types';
export class Header extends React.Component{
	constructor(props){
		super(); 
	this.state ={
		linknames:props.menu

	 } 	

	}
	render () {
		
		var allmenus = this.props.menu.map(function(menu,index){
        
		return(
			      <li key={index} className="active" ><a  href="#">{menu}</a></li>
			);
	});
return(

	     <nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="">WebSiteName</a>
			    </div>
			    <ul className="nav navbar-nav">{allmenus}</ul>
			  </div>
			</nav>

			);

	}
}
