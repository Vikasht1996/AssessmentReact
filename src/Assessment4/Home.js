import React, { Component } from 'react';
import BrowserHistory from '../Utilize/BrowserHistory';
class Home extends Component {
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
            <input type="text"  name="Username" className="two"/><br/>
					<label ><b>Password</b></label><br/>
					<input type="password"  name="Password"  className="two"/><br/><br/>
          <button  className="btn2"><b>Adduser</b></button> 
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6"><h2>View User</h2><br/>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
                </table> 
            </div>
            

          </div>
          </div>
          </div>
        );
    }
}

export default Home;