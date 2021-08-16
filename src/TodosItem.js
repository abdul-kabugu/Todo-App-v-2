import React from "react";

function TodosItem(props) {
  let completedStyles ={
    fontStyle: 'italic',
    color: 'pink',
    textDecoration: 'line through'
  }
  return (
    <div className="todo-app">
      <input
        type="checkbox"
        className="box"
        checked={props.completed}
        onChange={() => props.changed(props.todo.id)}
      />
      <span className="text" style={props.completed ? completedStyles : null}> {props.text} </span>
    </div>
  );
}

export default TodosItem;
