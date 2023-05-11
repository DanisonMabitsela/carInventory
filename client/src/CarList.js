import React from "react";

const CarList = ({ cars, updateCar, deleteCar }) => {
  return (
    <div>
      {cars.map((car) => (
        <div key={car._id}>
          <h3>{car.name}</h3>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Registration Number: {car.registrationNumber}</p>
          <p>Manufacture Year: {car.manufactureYear}</p>
          <button onClick={() => updateCar(car.name)}>Update</button>
          <button onClick={() => deleteCar(car.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
