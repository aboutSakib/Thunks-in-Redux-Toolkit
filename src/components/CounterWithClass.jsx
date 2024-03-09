import React, { Component } from "react";

export default class CounterWithClass extends Component {
  state = {
    counter: 1,
    todos: [],
    todoTitle: "",
  };

  increaseHandeler = (payload) => {
    const { counter } = this.state;
    this.setState({ ...this.state, counter: counter + payload });
  };
  decreaseHandeler = (payload) => {
    const { counter } = this.state;
    this.setState({ ...this.state, counter: counter - payload });
  };
  addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: this.state.todoTitle };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
      todoTitle: "",
    });
  };
  removeTodoHandler = (todoId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.id !== todoId),
    });
  };
  render() {
    return (
      <div className="todos">
        <div className="counter">
          <p>the value of counter is {this.state.counter}</p>
          <button onClick={() => this.increaseHandeler(6)}>
            Increase by 6
          </button>
          <button onClick={() => this.increaseHandeler(5)}>
            Increase by 5
          </button>
          <button onClick={() => this.decreaseHandeler(10)}>
            Decrease by 10
          </button>
          <button onClick={() => this.decreaseHandeler(5)}>
            Decrease by 5
          </button>
        </div>
        <hr />
        <br />
        <div className="todo">
          <form onSubmit={this.addTodoHandler}>
            <input
              type="text"
              value={this.state.todoTitle}
              onChange={(e) =>
                this.setState({ ...this.state, todoTitle: e.target.value })
              }
            />
            <button>Add</button>
          </form>
          <ul>
            {this.state.todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.title}</span>
                <button onClick={() => this.removeTodoHandler(todo.id)}>
                  Remove Todo
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
