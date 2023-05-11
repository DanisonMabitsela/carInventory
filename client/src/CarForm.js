import React, { useState, useEffect } from "react";

const CarForm = ({ addCar, editCar, clearForm }) => {
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [manufactureYear, setManufactureYear] = useState("");

  useEffect(() => {
    if (editCar) {
      setName(editCar.name);
      setMake(editCar.make);
      setModel(editCar.model);
      setRegistrationNumber(editCar.registrationNumber);
      setManufactureYear(editCar.manufactureYear);
    }
  }, [editCar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editCar) {
      // Perform update logic
      const updatedCar = {
        name,
        make,
        model,
        registrationNumber,
        manufactureYear,
      };
      // Pass the updated car to the updateCar function in App.js
      updateCar(editCar.name, updatedCar);
      clearForm();
    } else {
      // Perform add logic
      const newCar = {
        name,
        make,
        model,
        registrationNumber,
        manufactureYear,
      };
      addCar(newCar);
      clearForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Registration Number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />

      <button type="submit">{editCar ? "Update Car" : "Add Car"}</button>
    </form>
  );
};

export default CarForm;
