import { useState } from "react";

const AddContact = (props) => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    if (props.handleClick) props.handleClick(text, phone);
    setText("");
    setPhone("");
  };
  return (
    <div>
      <input
        placeholder="enter name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        placeholder="enter no"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export {AddContact};
