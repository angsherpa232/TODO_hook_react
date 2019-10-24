import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={headerStyle}>
    <h1>Todo list</h1>
    <Link to="/" style={linkStyle}>
      Home
    </Link>{" "}
    |{" "}
    <Link to="/about" style={linkStyle}>
      About
    </Link>
  </header>
);

const headerStyle = {
  textAlign: "center",
  padding: "10px",
  background: "#111",
  color: "#fff"
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  cursor: "pointer"
};

export default Header;
