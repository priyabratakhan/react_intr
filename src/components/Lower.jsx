import { useState } from "react";

const Lower = () => {
  const [text, setText] = useState("ENTER TEXT HERE");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <div>
      <h1>convert to lower</h1>
      <textarea value={text} onChange={handleChange}></textarea>
      <br />
      <button onClick={handleLower}>convert</button>
    </div>
  );
};

export { Lower };
