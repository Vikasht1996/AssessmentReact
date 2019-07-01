import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Registrationfrom.css'
import BrowserHistory from '../Utilize/BrowserHistory';
import { handle } from '../Actions/Registeraction'
import { success } from '../Actions/Loginaction'

class Registrationfrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      username: '',
      password: '',
      ferr: '',
      lerr: '',
      uerr: '',
      perr: '',
      array: [],


    };
  }
  onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });

  }
  onHandleClicks = () => {
    BrowserHistory.push('/login')

  }


  onHandleClick = () => {

    const reqst = {
      fname: this.state.fname,
      lname: this.state.lname,
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.fname.length === 0 && this.state.lname.length === 0 && this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({
        ferr: "Firstname is required", lerr: "Lastname is required",
        uerr: "Username is required",
        perr: "Password is required"
      })
    }
    else if (this.state.fname.length === 0) {
      this.setState({ ferr: "Firstname is required" })
    }
    else if (this.state.lname.length === 0) {
      this.setState({ lerr: "Lastname is required" })
    }
    else if (this.state.username.length === 0) {
      this.setState({ uerr: "Username is required" })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }

    else if (this.state.fname.match(/^[A-Za-z]{5}$/)) {
      this.setState({ ferr: "Please enter the valid fname" })
    }
    else if (this.state.lname.match(/^[A-Za-z]{5}$/)) {
      this.setState({ lerr: "Please enter the valid lname" })
    }
    else if (this.state.username.match(/^[A-Za-z]{5}$/)) {
      this.setState({ uerr: "Please enter the valid uname" })
    }
    else if (this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }

    else {
      BrowserHistory.push('/login')
      this.Loginaction.props.success("Register Successfully")
    }
  }


  render() {
    return (
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <h1>Register</h1>
              <form>
                <label><b>First Name</b></label><br />
                <input type="text" name="fname" className="one" onChange={this.onHandleChange} /><br />
                <p >{this.state.ferr}</p>
                <label><b>Last Name</b></label><br />
                <input type="text" name="lname" className="one" onChange={this.onHandleChange} /><br />
                <p >{this.state.lerr}</p>

                <label ><b>Username</b></label><br />
                <input type="text" name="username" className="one" onChange={this.onHandleChange} /><br />
                <p >{this.state.uerr}</p>
                <label ><b>Password</b></label><br />
                <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br />
                <p >{this.state.perr}</p>
              </form>
              <button onClick={this.onHandleClick} className="btn1"><b>Register</b></button><a href="" onClick={this.onHandleClicks}>Cancel</a>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  const { message } = state.Registerreducer;


  return { message };
};
export default connect(mapStoreToProps, { handle, success })(Registrationfrom);
