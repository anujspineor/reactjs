import React from 'react';

export class ParentComponent extends React.Component{
	constructor(props){
		super();  	
	}
	render(){
		return(
		<div>
		<h1>Click Bellow Button To Call Parent Component Method</h1>
		<button onClick={this.props.hello} className="btn">Click Here</button>
		</div>
		)

  }
	
}