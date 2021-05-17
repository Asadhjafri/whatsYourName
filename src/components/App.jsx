import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");

  function handleClick(event) {
    setHeadingText(name + Lname);
    event.preventDefault();
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

  function handleLname(event) {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="First name"
          value={name}
        />
        <input
          onChange={handleLname}
          type="text"
          placeholder="Last name"
          value={Lname}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseColor}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
