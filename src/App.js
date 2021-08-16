import React, { Component } from "react";
import TodosItem from "./TodosItem";
import styles from "./styles.css";
import todos from "./TodosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      AllTodo: todos
    };
  }

  handleClick = (id) => {
    this.setState((prevState) => {
      const updatedTodo = prevState.AllTodo.map((done) => {
        if (done.id === id) {
          done.completed = !done.completed;
        }
        return done;
      });
      return {
        AllTodo: updatedTodo
      };
    });
    console.log("changed", id);
  };
  render() {
    const mappedTodos = this.state.AllTodo.map((todo) => {
      return (
        <TodosItem
          key={todo.id}
          todo={todo}
          text={todo.text}
          completed={todo.completed}
          changed={this.handleClick}
        />
      );
    });

    return (
      <div>
        <h1> my todo app</h1>
        {mappedTodos}
      </div>
    );
  }
}

export default App;
