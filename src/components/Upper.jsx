import { useState } from "react";

export const Upper = () => {
  const [text, setText] = useState("enter text here");
  const changeUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>CONVERT TO UPPER</h1>
      <textarea value={text} onChange={handleOnchange} />
      <br></br>
      <button onClick={changeUpper}>convert</button>
    </div>
  );
};
