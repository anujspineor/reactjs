import React from 'react';
import ReactDom from 'react-dom'
import {Header} from "./app/components/Header"
import {Home} from "./app/components/Home"
import {Event} from "./app/components/event"
import {StateLess} from "./app/components/StateLessComponent"
import {ParentComponent} from "./app/components/ComunicateparentChild"
import {ComponentLifeCycle} from "./app/components/ComponentLifeCycle"
import {AddData} from "./app/components/addata"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
     //this.setState({linknames:a});

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
            </div>
			)
	}
}

ReactDom.render(<ToDoList />, document.getElementById('root'));