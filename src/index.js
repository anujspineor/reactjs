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
  sayToHello(){
    alert("Hello Paji !");
  }
	constructor(){
		super();
	
	this.state ={
		linknames:['Home','About Us','Contact Us']
	 } 
   this.onchangeHandler=this.onchangeHandler.bind(this);
   this.onsubmit=this.onsubmit.bind(this);

	}
  onchangeLinkName(){
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
    }
	render(){

		return (
			<div className="main">
			<div className="container">
              <Header menu={this.state.linknames} linkupdate= {this.onchangeLinkName.bind(this)}/>
              <input type="text" name="inputas"  
          onChange={(event) => this.onchangeHandler(event)} />
          <button type="button" onClick={(event =>this.onsubmit(event))}>Add </button>
              <Home/>
              <Event age={20} linkupdate= {this.onchangeLinkName.bind(this)}/>
              <StateLess/>
              <ParentComponent hello={this.sayToHello}/>
              <ComponentLifeCycle/>
              <AddData/>
              </div>
            </div>
			)
	}
}

ReactDom.render(<ToDoList />, document.getElementById('root'));