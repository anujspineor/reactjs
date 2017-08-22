import React from 'react';
import ReactDom from 'react-dom';
import {Header} from "./app/components/Header";
import {Home} from "./app/components/Home";
import {Slider} from "./app/components/Slider";
import {Event} from "./app/components/event";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/style.css';
import './css/style1.css';

class ToDoList extends React.Component{
  
	constructor(){
		super();
	
	this.state ={
		linknames:['Home','Sign In','Sign Up']
	 } 

	}
/*  onchangeLinkName(){
     this.setState({
      linknames:['abc', 'abc2', 'abc3']
     });
  }

    onsubmit(event){
    var b=this.state.linknames.map((a)=>a)
      b.push(this.state.inputas);
      
      this.setState({
      linknames:b
     });
     this.setState({linknames:a});

     } 
    onchangeHandler(event){
      var a=[];
      var name=event.target.name;
      a.push(event.target.value)
      this.setState({[name]:a});
    }*/
	render(){

		return (
			<div className="main">
			<div className="container">
         <Header menu={this.state.linknames}/>
      </div>
      <Slider/>         
      <div className="container">   
         <Home/>
      </div>
    <Event/>
    </div>
			)
	}
}
ReactDom.render(<ToDoList />, document.getElementById('root'));