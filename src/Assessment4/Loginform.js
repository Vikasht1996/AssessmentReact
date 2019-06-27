import './Loginfrom.css'
import BrowserHistory from '../Utilize/BrowserHistory';
import {handle} from '../Actions/Loginaction'
import React,{Component} from 'react';
import {connect} from 'react-redux';
class Loginform extends Component {
  onHandleClick = () =>{
    BrowserHistory.push('/home')
}
onHandleClicks = () =>{
    BrowserHistory.push('/register')
}
  
    render() {
        return (
          <div className="login">
          <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm1">  
            <h1>Login</h1>  
            <form >
                    <label ><b>Username</b></label><br/>
					<input type="text"  name="Username" className="two"/><br/>
					<label ><b>Password</b></label><br/>
					<input type="password"  name="Password"  className="two"/><br/><br/>
          <button onClick={this.onHandleClick} className="btn2"><b>Login</b></button><a href="" onClick={this.onHandleClicks}>Register</a>
            </form>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">	
            </div>
          </div>
          </div>
          </div>
        );
    }
}
const mapStoreToProps= (state)=>
{
    const { message }=state.Loginreducer;
   

    return { message };
}
export default connect(mapStoreToProps,{handle})(Loginform);
