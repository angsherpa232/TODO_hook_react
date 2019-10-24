import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form
        style={{
          display: "flex",
          alignItems: "center"
        }}
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          name="title"
          id=""
          placeholder="Add todo ..."
          style={inputStyle}
          onChange={this.onChange}
        />
        <input type="submit" style={submitStyle} className="btn" />
      </form>
    );
  }
}

const inputStyle = {
  padding: "10px",
  fontSize: "1.4rem",
  flex: "6",
  borderRadius: "10px",
  margin: "10px 0",
  border: "1px solid #ccc"
};

const submitStyle = {
  display: "inline-block",
  flex: "3",
  marginLeft: "5px"
};

export default AddTodo;
