import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        value={props.name}
        onChange={props.handleChanges}
        name="name"
        type="text"
        placeholder="Add Todo Here"
      />
      <button onClick={props.addTodo}>Submit</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
