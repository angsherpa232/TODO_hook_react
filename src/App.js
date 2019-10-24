import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todo from "./components/Todo";
import Header from "../src/components/layout/Header";
import About from "../src/components/layout/About";
import AddTodo from "../src/components/AddTodo";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data =>
        this.setState({
          todos: data
        })
      );
  }

  checkMark = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE"
    }).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addTodo = title => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST"
    }).then(res =>
      this.setState({
        todos: [...this.state.todos, { title: title, completed: false }]
      })
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <AddTodo addTodo={this.addTodo} />
                  <Todo
                    todos={this.state.todos}
                    checkMark={this.checkMark}
                    delTodo={this.delTodo}
                  />
                </>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
