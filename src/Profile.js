import { Component } from "react";

class Profile extends Component {

  render() {

    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return <>
      {this.props.isAuthenticated &&
        <>
          <h1>User name: {this.props.loginAuth.name}</h1>
        <img src={this.props.loginAuth.picture}/>
        <h2>Email: {this.props.loginAuth.email} </h2>
        </>
      }
    </>
  }
};

export default Profile;
