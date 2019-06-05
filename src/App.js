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
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      taskInput: ""
    };
  }

  addTodo = e => {
    const newItem = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    };
    e.preventDefault();
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newItem],
        taskInput: ""
      };
    });
  };

  handleChanges = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleComplete = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  clearCompleted = e => {
    console.log("Clicked clear completed!");
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => item.completed === false)
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List App</h1>

        <TodoList
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
        />
        <TodoForm
          taskInput={this.state.taskInput}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
