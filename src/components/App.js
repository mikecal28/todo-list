import { Component } from "react";
import "../styles/styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>

        <form className="add-todo">
          <input type="text" placeholder="Add Todo" />

          <button>Add</button>
        </form>

        <div className="todo-item">
          <input type="checkbox" />

          <p>Todo item description</p>

          <button>X</button>
        </div>
      </div>
    );
  }
}

export default App;
