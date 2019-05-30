import React from "react";

const TodoForm = props => {
  return (
    <form className="form" onSubmit={e => props.addTodo(e)}>
      <input
        value={props.taskInput}
        type="text"
        name="taskInput"
        placeholder="Put task here"
        onChange={e => props.handleChanges(e)}
      />
      <button onClick={props.addTodo}>Submit</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
