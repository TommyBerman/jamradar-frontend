import React from "react";
import API from "../API.js";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    API.signIn(this.state)
      .then((json) => this.props.signIn(json.email, json.token))
  };

  render() {

    return (
      <div >
        <label>Email:</label>
        <input type="email" name="email" onChange={this.handleChange} />
        <br />

        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleChange} />
        <br />

        <button onClick={this.handleSubmit}>Sign In</button>
      </div>
    );
  }
}

export default SignInForm;
