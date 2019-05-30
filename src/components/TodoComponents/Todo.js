import React from "react";

const Todo = props => {
  return (
    <div className="Todo">
      <p
        id={props.todoProps.id}
        onClick={e => props.toggleComplete(e, props.item)}
      >
        Task: {props.todoProps.task} Completed:{" "}
      </p>
    </div>
  );
};

export default Todo;
