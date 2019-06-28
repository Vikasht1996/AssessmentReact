import React, { Component } from 'react';
import BrowserHistory from '../Utilize/BrowserHistory';
import './Homeform.css'
 
class Home extends Component { 
  constructor(props) { 
    super(props); 
    this.state={
        name:'',
        username:'',
        array:[]
    }
}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}

addClick=(e)=>{
    const reqobj={
        name: this.state.name,
       username: this.state.username
    }
    let x=this.state.array.push(reqobj);
    this.setState({x});
  }
  deleteClick=(e)=>{
    const reqobj={
        name: this.state.name,
       username: this.state.username
    }
    let x=this.state.array.pop(reqobj);
    this.setState({x});
  }
    onHandleClick = () =>{
        BrowserHistory.push('/login')
    }
    render() {
        return (
            <div className="home">
          <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6"><h1>React Application</h1></div>
            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5 ">     
            </div>
            <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1 "><a href="" onClick={this.onHandleClick}>Logout</a>     
            </div>
            
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6"><h2>Add User</h2><br/>
            <lable>Name</lable><br/>
            <input type="text"  name="name" className="two" onChange={this.handleChange}/><br/>
					<label ><b>Username</b></label><br/>
					<input type="text"  name="username"  className="two"onChange={this.handleChange}/><br/><br/>
          <button  className="btn2" onClick={this.addClick}><b>Adduser</b></button> 
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6"><h2>View User</h2><br/>
            <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"><h4>Name</h4></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 "><h4>Username</h4>     
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 "><h4>Actions</h4>     
            </div>
            </div>
            <hr/>
            {this.state.array.map((display) =>(
            <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">{display.name}</div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 ">{display.username}    
            </div>
            <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2"><button>Edit</button> </div>
            <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2 "><button onClick={this.deleteClick}>Delete</button>     
            </div>
            <br/><br/>
            <hr/>
            </div>
            ))} 
            </div>
          </div>
          </div>
          </div>
          </div>
        );
    }
}

export default Home;