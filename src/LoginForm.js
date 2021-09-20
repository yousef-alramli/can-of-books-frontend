import { Component } from "react";

class LoginForm extends Component {

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <form>
        <input type="text" name="userName" placeholder='please write your name' />
        <input type="text" name="userName" placeholder='please write your email'/>
      </form>
    );
  }
};

export default LoginForm;
