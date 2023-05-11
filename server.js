const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectionURL =
  "mongodb+srv://Kwena:apjSAfFC9Sncu8Xm@hyperiontask.ygkamrp.mongodb.net/test";

// Connect to MongoDB
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Import the Car model
const Car = require("./models/Car");

// Import the carController
const carController = require("./controllers/carController");

// Create a new car
app.post("/cars", carController.addCar);

// Update information about a single car by name
app.put("/cars/:name", carController.updateCar);

// Delete a specific car by name
app.delete("/cars/:name", carController.deleteCar);

// List all cars
app.get("/cars", carController.getAllCars);

// List cars older than five years
app.get("/cars/olderThanFiveYears", carController.getCarsOlderThanFiveYears);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
