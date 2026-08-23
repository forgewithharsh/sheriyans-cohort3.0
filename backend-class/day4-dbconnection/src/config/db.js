const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://guleriah59_db_user:cohort123@cohort3-public.y4agefi.mongodb.net/",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("Error in db", error);
  }
};

module.exports = connectDb;
