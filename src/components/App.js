import { Component } from "react";
// import "../styles/styles.css";
import TodoItem from "./TodoItem";

let id = 0;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };

    this.id = id;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.id++;
    this.setState((state, props) => ({
      todos: [{ id: this.id, title: state.todo, done: false }, ...state.todos],
      todo: "",
    }));
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  // PLEASE ALWAYS USE SOMETHING GUARANTEED TO BE UNIQUE (email, id, etc)
  handleDelete(id) {
    this.setState((state, props) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  renderTodos() {
    return this.state.todos.map((todo, idx) => {
      console.log(todo);
      return (
        <TodoItem key={idx} todo={todo} handleDelete={this.handleDelete} />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>

        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="Add Todo"
            onChange={this.handleChange}
            value={this.state.todo}
          />

          <button>Add</button>
        </form>

        {this.renderTodos()}
      </div>
    );
  }
}
