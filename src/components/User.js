import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    isVisible: false,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isVisible: false,
  //   };
  // }

  render() {
    const { name, salary, department } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="d-inline">{name}</h4>
              <i className="fa-solid fa-trash"></i>
            </div>
            {isVisible ? (
              <div className="card-body">
                <p className="card-text">Maaş: {salary}</p>
                <p className="card-text">Departman: {department}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};
User.defaultProps = {
  name: "Bilgi Yok",
  salary: "Bilgi Yok",
  department: "Bilgi Yok",
};
export default User;
