const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  currentOwner: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      suburb: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
  },
  manufactureYear: {
    type: Number,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
