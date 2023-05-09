import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    const { name, salary, department } = this.props;
    return (
      <div>
        <ul>
          <li>İsim: {name}</li>
          <li>Maaş: {salary}</li>
          <li> Departman: {department}</li>
        </ul>
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
