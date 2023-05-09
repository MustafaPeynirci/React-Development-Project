import React, { Component } from "react";

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
export default User;
