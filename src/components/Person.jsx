import React, { Component } from "react";

export default class Person extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>My Name is {name}</h1>
        <p>My Age is {age}</p>
        
      </div>
    );
  }
}
