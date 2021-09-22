import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
class App extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <>
        <Router>
          <Header
            isAuthenticated={this.props.auth0.isAuthenticated}

            onLogout={this.logoutHandler}
            onlogin={this.loginHandler}
          />
          <Switch>
            <Route exact path="/">
              <BestBooks />
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            <Route path="/Profile">
              <Profile
                isAuthenticated={this.props.auth0.isAuthenticated}
                loginAuth={this.props.auth0.user}
              />
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
