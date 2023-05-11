import React, { useState } from "react";

const FindCarForm = ({ findCarByName }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    findCarByName(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter car name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Find Car</button>
    </form>
  );
};

export default FindCarForm;
