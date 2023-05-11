// Import the Car model
const Car = require("../models/Car");

// Add a new car
exports.addCar = async (req, res) => {
  const {
    name,
    make,
    model,
    registrationNumber,
    currentOwner,
    manufactureYear,
  } = req.body;

  try {
    // Create a new car instance
    const car = new Car({
      name,
      make,
      model,
      registrationNumber,
      currentOwner,
      manufactureYear,
    });

    // Save the car to the database
    const savedCar = await car.save();

    res.status(201).json(savedCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update information about a single car by name
exports.updateCar = async (req, res) => {
  const {
    name,
    make,
    model,
    registrationNumber,
    currentOwner,
    manufactureYear,
  } = req.body;

  try {
    // Find the car by name
    const car = await Car.findOne({ name });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Update the car's properties
    car.make = make;
    car.model = model;
    car.registrationNumber = registrationNumber;
    car.currentOwner = currentOwner;
    car.manufactureYear = manufactureYear;

    // Save the updated car
    const updatedCar = await car.save();

    res.status(200).json(updatedCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a specific car by name
exports.deleteCar = async (req, res) => {
  const { name } = req.params;

  try {
    // Find the car by name and delete it
    const deletedCar = await Car.findOneAndDelete({ name });

    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    // Retrieve all cars from the database
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get cars older than five years
exports.getCarsOlderThanFiveYears = async (req, res) => {
  try {
    // Calculate the current year
    const currentYear = new Date().getFullYear();

    // Calculate the year five years ago
    const fiveYearsAgo = currentYear - 5;

    // Retrieve cars older than five years from the database
    const cars = await Car.find({ manufactureYear: { $lt: fiveYearsAgo } });

    res.status(200).json(cars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
