import React,{Component} from 'react';
import {connect} from 'react-redux';
import './Registrationfrom.css'
import BrowserHistory from '../Utilize/BrowserHistory';
import {handle} from '../Actions/Registeraction'

class Registrationfrom extends Component {
  onHandleClick = () =>{
    BrowserHistory.push('/login')
}
  
    render() {
        return (
          <div className="register">
          <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">  
            <h1>Register</h1>  
            <form >
            
          <label><b>First Name</b></label><br/>
					<input type="text"  name="Fname" className="one" /><br/>
					<label><b>Last Name</b></label><br/>
					<input type="text"  name="Lname" className="one" /><br/>
                    <label ><b>Username</b></label><br/>
					<input type="text"  name="Username" className="one" /><br/>
					<label ><b>Password</b></label><br/>
					<input type="password"  name="Password" className="one" /><br/><br/>
          <button onClick={this.onHandleClick} className="btn1"><b>Register</b></button><a href="" onClick={this.onHandleClick}>Cancel</a>
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
    const { message }=state.Registerreducer;
   

    return { message };
};
export default connect(mapStoreToProps,{handle})(Registrationfrom);
