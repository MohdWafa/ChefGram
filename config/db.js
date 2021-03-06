const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewURLParser: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    //EXIT process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
