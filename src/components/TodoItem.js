import { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.todo.done,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState((state, props) => ({
    //   done: !state.done,
    // }));

    fetch(`https://rec-todo-api.herokuapp.com/todo/${this.props.todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        done: !this.state.done,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((state, props) => ({
          done: data.done,
        }));
      })
      .catch((err) => console.error("handlClick Error: ", err));
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={this.handleClick}
          defaultChecked={this.state.done}
        />

        <p className={this.state.done ? "done" : ""}>{this.props.todo.title}</p>

        <button
          className="delete-btn"
          onClick={() => this.props.handleDelete(this.props.todo.id)}
        >
          X
        </button>
      </div>
    );
  }
}
