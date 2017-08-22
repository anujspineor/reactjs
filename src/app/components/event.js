import React from 'react';
import axios from 'axios';

export class Event extends React.Component{
	constructor(props){
		super();
	this.state ={
		apidata: []

	  } 	
	}
     
	get_User(){
	     var self = this;
		 axios.get('http://localhost/blog/public/api/user?api_token=$2y$10$fnzuDjk3J/RKAz/6pvEB2.fE1VH7WTjXjCv0CKkdctCXxRhaQVPKe')
		  .then(function (response) {
		  	
		    self.setState({apidata: response.data})

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
     
	}

	render(){
		
	var alldata = this.state.apidata.map(function(obj,index){

         return(
			      <li key={index} className="active" >ID:{obj.id} having  email address {obj.email} and having name <a  href="#">{obj.name}</a> </li>
			 );
	 });
	

	return(
			<div>
			<button onClick={this.get_User.bind(this)}>Click To Fetch Data</button>

			{alldata}
               
			
			</div>
		)
	}
}