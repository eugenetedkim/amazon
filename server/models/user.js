/* ---------------STEP 4: Create a User Schema------------------*/

// Creating a blueprint of a User object

// This is a User model to save data to the database (MongoDB)
// The llibrary that communicates to the database is Mongoose

// This user.js file needs to be in the server folder under another folder called models
// This models folder will store all of our models

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },

  // Making a relationship to another schema (avoiding complicating this user schema; we'll create another address schema later)
  address: { type: Schema.Types.ObjectId, ref: "Address" },
});

module.exports = mongoose.model("User", UserSchema); // Exporting this user schema object so we could use it in another file

 /**
  * ---------------------STEP 5: Connect to the database (MongoDB)-----------------------------
  * In order for our Node.js application to begin storing data, we have to create a MongoDB database.
  * You have 2 choices:
  *   1.) To install your MongoDB locally.
  *   2.) To install it on the cloud (MongoDB Atlas).
  * 
  * We'll be using MongoDB Atlas to connect to our database.
  * mongodb.com/cloud/atlas
  * 
  * Sign-in and Create a Cluster (free version).
  * Add New User under Database Access under Security.
  * Give Read and write to any database User Privileges and Add User
  * 
  * Create a new User Database by going to Database Access under Security in the navigation drawer on the left-side of the page.
  * Password Authentication
  * root
  * Autogenerate Security Password
  * cuNyUMmR25E2aypg
  * 
  * Database User Privileges
  * Read and write to any database
  * Add User
  * 
  * Now go to Network Access under Security in the nagivation drawer.
  * Add an IP Address
  * ALLOW ACCESS FROM ANYWHERE
  * Confirm
  * 
  * Now go to Clusters under Data Storage and Connect to amazon-clone.
  * Setup connection security.
  * Choose a connection method.
  * Get your pre-formatted connection string by selecting your tool below.
  * Connect your application - Connect your application to your cluster using MongDB's native drivers.
  * Select your driver and version.
  * Driver: Node.js
  * Version: 3.6 or later
  * Add your connection string into your application code
  * Copy the URI link.
  * 
  * Go back to application. Check package.json and check if you have mongoose.
  * 
  * Now go back to server.js and right below your app object, you want to connect it.
  * 
  * Go to server.js STEP 5: Connect to the database (MongoDB)
  */