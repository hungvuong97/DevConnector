import React, { Component } from "react";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authAction";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { authActions } from "../../actions";
import { Spin, Icon } from "antd";
import Fetching from "../common/Fetching";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillMount() {
    console.log(this.props.auth.isAuthenticated);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dasboard");
    }
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/create-profile");
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/create-profile");
    }
  }

  render() {
    const { errors } = this.state;
    const { isFetching } = this.props;
    return (
      <div className="login">
        <Fetching />
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={this.props.errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={this.props.errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  isFetching: state.errors.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUser: authActions.loginUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
