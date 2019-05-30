import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "some task",
          id: 2,
          completed: false
        }
      ],
      task: "",
      id: "",
      completed: false
    };
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.name,
      id: Date.now(),
      completed: this.state.completed
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      name: ""
    });
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleComplete = event => {
    event.preventDefault();
    console.log(event.target.id);

    this.state.todos.forEach(el => {
      el.completed = !el.completed;
    });

    // this.state.todos.forEach(el => (el.completed = !el.completed));
    // console.log(this.state.todos);
    // console.log(event.target.id);
    this.setState({});
  };

  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          name={this.state.name}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
