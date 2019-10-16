import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
    this.props.history.push("/login");
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);
