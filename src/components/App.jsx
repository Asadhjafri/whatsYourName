import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

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
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="First name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="Last name"
          value={fullName.lName}
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
