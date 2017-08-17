import React from 'react';

export class Event extends React.Component{
	constructor(props){
		super();
		
		this.state ={
            myage: props.age,
            status: 0, 
		};
		setInterval(()=>{
     	this.setState(
		{
			status:this.state.status + 1
		});
  
        }, 3000);   
		
	}
	myfunction(){
		this.props.linkupdate(this.state.mylink);
	}
     
	increaseAge(){
		this.setState(
		{
			myage: this.state.myage + 3
		});
	}


	render(){
		
		return(
			<div>
			<button onClick={this.increaseAge.bind(this)}>Click To Increase Age</button>
			<p>Your Age Is {this.state.myage}</p>
			<p>Status Is {this.state.status}</p>
			<button onClick={this.myfunction.bind(this)}>Click To Change Link</button>
			</div>
			)
	}
}