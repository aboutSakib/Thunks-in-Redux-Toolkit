import { Component } from "react";
import Person from "../components/Person";
import CounterWithClass from "./../components/CounterWithClass";
class ClassComponents extends Component {
  render() {
    return (
      <div>
        <h1>Class Components</h1>
        <hr />
        <Person name="Sakib" age="23" />
        <hr />
        <br />
        <CounterWithClass />
      </div>
    );
  }
}
export default ClassComponents;
