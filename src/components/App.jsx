import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleClick() {
    setHeadingText(name);
  }

  function handleMouseColor() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseColor}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
