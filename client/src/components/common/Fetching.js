import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Spin, Icon } from "antd";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Fetching extends Component {
  render() {
    const { isFetching } = this.props;
    return isFetching ? (
      <div
        className="spinner"
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          zIndex: 99
        }}
      >
        <Spin size="large" indicator={antIcon} />
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({
  isFetching: state.errors.isFetching
});

export default connect(mapStateToProps)(Fetching);
