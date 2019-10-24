import React from "react";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      color: "#000",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { title, id } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onClick={this.props.checkMark.bind(this, id)}
          />{" "}
          {title}
          <button style={delStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const delStyle = {
  float: "right",
  padding: "5px",
  borderRadius: "50%",
  color: "#fff",
  background: "#ed0000",
  cursor: "pointer"
};

export default TodoItem;
