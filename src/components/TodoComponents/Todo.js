import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleComplete(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
