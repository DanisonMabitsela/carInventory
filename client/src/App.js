import React, { useState, useEffect } from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";
import FindCarForm from "./FindCarForm";

const App = () => {
  const [cars, setCars] = useState([]);
  const [editCar, setEditCar] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch("/cars");
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCar = async (car) => {
    try {
      const response = await fetch("/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      });
      const data = await response.json();
      setCars([...cars, data]);
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const updateCar = async (carName) => {
    const carToUpdate = cars.find((car) => car.name === carName);
    if (carToUpdate) {
      setEditCar(carToUpdate);
    }
  };

  const deleteCar = async (carName) => {
    try {
      await fetch(`/cars/${carName}`, {
        method: "DELETE",
      });
      const updatedCars = cars.filter((car) => car.name !== carName);
      setCars(updatedCars);
    } catch (error) {
      console.log(error);
    }
  };

  const findCarByName = async (name) => {
    try {
      const response = await fetch(`/cars/findByName?name=${name}`);
      const data = await response.json();
      // Handle the response as needed
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setEditCar(null);
  };

  return (
    <div>
      <h1>Car Inventory</h1>

      <h2>Add Car</h2>
      <CarForm addCar={addCar} editCar={editCar} clearForm={clearForm} />

      <h2>Car List</h2>
      <CarList cars={cars} updateCar={updateCar} deleteCar={deleteCar} />

      <h2>Find Car By Name</h2>
      <FindCarForm findCarByName={findCarByName} />
    </div>
  );
};

export default App;
