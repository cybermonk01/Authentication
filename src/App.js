import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import { auth } from './firebase/firebase.utils';
import HomePage from "./pages/homepage/homepage.component";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null 
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
