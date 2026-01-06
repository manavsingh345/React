import { useState } from "react";

export default function CheckList() {
  const options = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const toggleCheckbox = (index) => {
    if (selectedIndexes.includes(index)) {
      // remove index
      setSelectedIndexes(
        selectedIndexes.filter(i => i !== index)
      );
    } else {
      // add index
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  return (
    <div>
      <h2>Select Skills</h2>

      {options.map((option, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selectedIndexes.includes(index)}
            onChange={() => toggleCheckbox(index)}
          />
          {option}
        </label>
      ))}

      <h3>Selected Skills:</h3>
      <ul>
        {selectedIndexes.map(i => (
          <li key={i}>{options[i]}</li>
        ))}
      </ul>
    </div>
  );
}
