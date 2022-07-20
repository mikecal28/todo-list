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
    this.setState((state, props) => ({
      done: !state.done,
    }));
  }

  // componentDidMount() {
  //   this.setState({
  //     done: this.props.done,
  //   });
  // }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={this.handleClick}
          defaultChecked={this.state.done}
        />

        <p className={this.state.done ? "done" : ""}>{this.props.todo.title}</p>

        <button onClick={() => this.props.handleDelete(this.props.todo.id)}>
          X
        </button>
      </div>
    );
  }
}
