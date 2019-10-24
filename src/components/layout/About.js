import React from "react";

const About = () => {
  return (
    <div style={aboutStyle}>
      <p>
        This is the about page for this Todo app. The main objective of this app
        is to let the user make the best use of the time so that the
        productivity will sky rocket.
      </p>
    </div>
  );
};

const aboutStyle = {
  padding: "1rem",
  fontSize: "1rem",
  background: "#17e3e6",
  color: "#654141"
};
export default About;
