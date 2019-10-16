import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Post from "./components/post/Post";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import configureStore from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import { clearCurrentProfile } from "./actions/profileActions";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Posts from "./components/posts/Posts";

const store = configureStore();

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <div className="App">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/create-profile" component={CreateProfile} /> */}
              {/* <Route exact path="/edit-profile" component={EditProfile} /> */}
              {/* <Route exact path="/logout" component={Logout} /> */}
              {/* <Route exact path="/feed" component={Posts} /> */}
              <Switch>
                {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />s */}
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch> */}
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
              {/* <Route exact path="/not-found" component={NotFound} /> */}
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}
