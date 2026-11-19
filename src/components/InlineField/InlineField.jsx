import "./InlineField.css";
import { useState } from "react";

export function InlineField({ type="text", label, inputValue, onInputChange, name }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [inputValue, setInputValue] = useState("Thu Dong");

  const commitEdit = () => {
    setIsEditing(false)
  };

  const startEdit = () => {
    setIsEditing(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && type !== "textarea") {
      e.preventDefault()
      commitEdit()
    }

    if (e.key === "Escape") {
      e.preventDefault()
      commitEdit()
    }
  }

  return (
    <div className="form-group">
      <div className="label">{label}</div>

      {!isEditing ? (
        <button type="button" className="value"
                onClick={startEdit}
        >{inputValue}</button>
      ) : type === "textarea" ? (
        <textarea
          autoFocus
          aria-label={label}
          value={inputValue}
          name={name}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
          onChange={(e) => onInputChange(e.target.value)}
        ></textarea>
      ) : (
        <input
          autoFocus
          aria-label={label}
          value={inputValue}
          name={name}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
          onChange={(e) => onInputChange(e.target.value)}
        />
      )}
    </div>
  );
}
