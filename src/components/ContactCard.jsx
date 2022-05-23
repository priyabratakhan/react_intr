import {useState} from "react";

const ContactCard = ({ id, name, phone, onDelete }) => {
    return (
      <div
        style={{
          display: "flex",
          padding: "1rem",
          border: "1px solid black",
          marginBottom: "0.25rem",
          gap: "1rem",
        }}
      >
        <div>
          {name} {phone}
        </div>
        <button onclick={() => onDelete(id)}>Delete</button>
        {/* <img
          src="data:image/png;base64,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"
          alt="icon"
        /> */}
      </div>
    );
  };

 export {ContactCard}