import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  render() {
    const { todos } = this.props;
    return todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkMark={this.props.checkMark}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

export default Todo;
