// Creating a blueprint of a User object

// This is a User model to save data to the database (MongoDB)
// The llibrary that communicates to the database is Mongoose

// This user.js file needs to be in the server folder under another folder called models
// This models directory will store all of our models

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: Schema.Types.ObjectId, ref: "Address" },
});

module.exports = mongoose.model("User", UserSchema);
