/*
 * ---------------STEP 1: Introduction------------------
 *
 * Technology Stack:
 *  *Node.js - Backend
 *  *Vue - Frontend
 *  *Knux - Help and manage vue.js components
 *  *PayPal  - Payment gateway
 *  *Stripe - Payment gateway
 *  *Algolia - Search engine
 *  *MongoDB - Storing the data
 *  *Amazon Web Services - Storing images and deployment
 * 
 * 2 components that we're going to build:
 * 
 *  1. *Consumer facing (Frontend)
 *     *Admin (Frontend) - store the products, create categories, and create the owner of the product
 *  2. Foundation of the application (Backend)
 *
 * --------------STEP 2: POST and GET API--------------
 * 
 * Create a new folder and give it a name, "amazon".
 * Change directory into it.
 * Open up your favorite text editor (ex. Visual Studio).
 * 
 * Install these extensions on Visual Studio Code to be more productive:
 *  *Auto Close Tab - Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text
 *  *Prettier - Prettier is an opinionated code formatter. It enforces a consistent style by parsing 
 *   your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary
 *  *Vetur - Vue tooling for VS Code
 * 
 * Change directory in a newly created director called "server".
 * Input:
 *  $ npm init
 * 
 * Click enter, enter
 * entry point (index.js): server.js
 * Click enter, enter, enter, yes
 * 
 * Now, install the 3 dependencies:
 *  $ npm install express morgan body-parser --save
 * 
 * Now, if you open up the package.json file, you'll see the three dependencies that we just installed.
 * 
 * {
 *   "name": "server",
 *   "version": "1.0.0",
 *   "description": "",
 *   "main": "server.js",
 *   "scripts": {
 *     "test": "echo \"Error: no test specified\" && exit 1"
 *   },
 *   "author": "",
 *   "license": "ISC",
 *   "dependencies": {
 *     "body-parser": "^1.19.0",
 *     "dotenv": "^8.2.0",
 *     "express": "^4.17.1",
 *     "mongoose": "^5.10.10",
 *     "morgan": "^1.10.0"
 *   }
 * }
 * 
 * Now create a file called server.js under the server folder
 * and we want to type in all the dependencies that are required.
 * 
 *  const express = require("express");
 *  const morgan = require("morgan");
 *  const bodyParser = require("body-parser");
 *
 * Express
 *
 *  Express is a Node.js web application framework
 *  that enables you to access HTTP methods:
 *  GET, POST, PUT, and DELETE.
 *
 * The Hypertext Transfer Protocol (HTTP) is designed to
 * enable communicatons between clients and servers.
 *
 * HTTP works as a request-response protocol between a client and server.
 *
 *  Example:
 *   When you open up Instagram,
 *   the application will trigger a GET Request
 *   in the background to fetch data
 *   from the server to present to you
 *   pictures on the front-end.
 *
 * Default/Standard HTTP methods:
 *  GET request - Retrieve data from the server.
 *  POST request - Send data from the front-end to the server.
 *  UPDDATE request - Update data (update email, profile picture)
 *  DELETE request - Delete data (delete your Instagram account)
 *
 *  ********************************************************************
 *
 * MORGAN (A Middleware)
 *
 *  Morgan is a logger that will log all the HTTP requests
 *  that comes from the Front-end. So whenever you make a request,
 *  Morgan will simply show those requests in the terminal.
 *
 * *********************************************************************
 *
 * BODY PARSER (Middleware)
 *
 *  Body Parser is a library that gets the data
 *  from the Front-end and parses it in the proper format.
 *
 *  Example:
 *    The data being sent from a Sign-up Form on the Front-end
 *    has to be understood by the back-end. Therefore, a Body Parser
 *    is used to extract and translate the information into proper format
 *    (JSON or URL encoded) for further processing.
 */

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

/**
 * 
 * ---------------STEP 3: Git------------------------------
 * $ git init
 * $ touch .gitignore
 * $ edit .gitignore and add “node_modules”
 * $ git add -A (use "git add <file> or -A for all files” to update/stage any changes for commit/making note/making record)
 * $ git status (shows which branch you’re on and changes that are updated/staged for commit or changes that aren’t yet 
 *   updated/staged for commit)
 * $ git commit -m "Initial commit Write POST and GET API" Whatever has been updated/staged for commit is now to be 
 *   committed/noted/recorded
 * $ git log (shows you all the commits/notes/records you committed. Like cookie crumbs of how you changed your code over time.)
 * change some code
 * $ git status (shows you changes you haven’t yet updated/staged for commit) AND (shows you changes you have updated/staged 
 *   in green so you can decide to commit them or use git checkout to disregard and revert the code to it’s previous 
 *   state from the last commit)
 * $ git checkout server/server.js (reverts the code change)
 *
 * ---------------STEP 4: Create a User Schema----------------------
 * 
 * (Go to user.js)
 * 
 * ---------------STEP 5: Connect to the database (MongoDB)------------------
 * (Go to user.js file)
 * (Continuing off from user.js)
 * 
 * Require mongoose at the top of this file.
 *  const mongoose = require("mongoose");
 * 
 * Apply connect() to the mongoose object.
 * 
 * Paste the connection string you copied from the amazon-clone connection page.
 * 
 * Replace the autogenerated security password when you added a new user database with the <password> in the URI link you copied.
 * 
 * mongodb+srv://root:<password>@amazon-clone.gve7h.mongodb.net/<dbname>?retryWrites=true&w=majority
 * 
 * cuNyUMmR25E2aypg
 * 
 * Upon connection, you'll get warnings. Add the specified parameters to the connection()
 * 
 *  eugene@MacBook-Pro server % node server.js
 *  (node:1886) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
 *  Listening on PORT 3000
 *  (node:1886) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
 *  Connected to the database
 * 
 * Since it is annoying to cancel the server (ctrl+c) and restarting it again ($ node server.js).
 * You want your server to restart by itself.
 * Install using:
 *  sudo npm install -g nodemon
 * (The "-g" is to install it globally).
 * 
 * Then enter command:
 * 
 * $ nodemon server
 * 
 * eugene@MacBook-Pro server % pwd
 * /Users/eugene/Desktop/amazon/server
 * eugene@MacBook-Pro server % nodemon server
 * [nodemon] 2.0.6
 * [nodemon] to restart at any time, enter `rs`
 * [nodemon] watching path(s): *.*
 * [nodemon] watching extensions: js,mjs,json
 * [nodemon] starting `node server.js`
 * Listening on PORT 3000
 * Connected to the database
 *
 * Now every you press (ctrl+s), server will automatically be restarted, thanks to Nodemon.
 * 
 * We have to put the link URI used in connect() in a safe environment.
 * 
 * It is dangerous to put your sensitive information like your MongoDB connection, like:
 * 
 * "mongodb+srv://root:cuNyUMmR25E2aypg@amazon-clone.gve7h.mongodb.net/<dbname>?retryWrites=true&w=majority"
 * 
 * directly into your application.
 * 
 * It is really bad.
 * 
 * It is best practice to separate the sensitive information and put it in another file (introducing ENVIRONMENT VARIABLE!).
 * 
 * --------------------------STEP 6: Setting up environment variables-----------------
 * 
 * An environment variable is a variable where the value is set outside the program.
 * 
 * Typically, the true functionality is built into the operating system.
 * 
 * Since it is outside of our application, potential hackers might have trouble accessing our sensitive information.
 * 
 * It is built for security of your application.
 * 
 * We need to install a new library called dotenv:
 * $ sudo npm install dotenv --save
 * 
 * (ctrl+c) to disconnect from the database, then enter the command: $ sudo npm install dotenv --save
 * 
 * Once installed, you have to require the file which is importing dotevn.
 * 
 * const dotevn = require('dotevn');
 * 
 * Then you add:
 * 
 * dotenv.config();
 * 
 * So, it will load up the file.
 * 
 * We have to create a file to store all the environment variables.
 * Create a new file .env under the server folder.
 * Copy the link URI (mongodb+srv://root:cuNyUMmR25E2aypg@amazon-clone.gve7h.mongodb.net/<dbname>?retryWrites=true&w=majority).
 * 
 * Remove the line containin the link URI:
 * 
 *  "mongodb+srv://root:cuNyUMmR25E2aypg@amazon-clone.gve7h.mongodb.net/<dbname>?retryWrites=true&w=majority",
 * 
 * and replace it with:
 * 
 *  process.env.DATABASE,
 * 
 * Now, test it out and run:
 * 
 * $ nodemon server.js
 * 
 *  eugene@MacBook-Pro server % nodemon server.js
 *  [nodemon] 2.0.6
 *  [nodemon] to restart at any time, enter `rs`
 *  [nodemon] watching path(s): *.*
 *  [nodemon] watching extensions: js,mjs,json
 *  [nodemon] starting `node server.js`
 *  Listening on PORT 3000
 *  Connected to the database
 * 
 * Now this Node.js application is more secure because of the environment variables.
 * More security will be added as the app is built.
 * 
 * Create first POST API and create a new user object under the POST API.
 */
dotenv.config();

const app = express();

mongoose.connect(
  //"mongodb+srv://root:cuNyUMmR25E2aypg@amazon-clone.gve7h.mongodb.net/<dbname>?retryWrites=true&w=majority",
  process.env.DATABASE,
  { useNewUrlParser: true , useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

/*
 * The Middlewares
 *
 * Without these middlewares, the Back-end wouldn't have the ability
 * to parse the data from the Front-end and tell the Terminal
 * that requests have been made from the Front-end.
 */
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
 * This GET method is our first API.
 *
 * (GET - Retrieve data from the server)
 *
 *  GET is used to request data from a specified resource.
 *  GET is one of the most commont HTTP methods.
 *
 *    Note that the query string (name/value pairs)
 *    is sent in the URL of a GET request:
 *    /test/demo_form.php?name1=value1&name2=value2
 *
 *  GET requests can be cached.
 *  GET requests remain in the browser history.
 *  GET requests can be bookmarked.
 *  GET requests should never be used when dealing with sensitive data.
 *  GET requests are only used to request data (not modify).
 *
 *  Argument 1: Since we're using the Home URL, we pass in a '/'.
 *  Argument 2: A request and response and respond with something.
 */
app.get("/", (req, res) => {
  res.json("This is the response sent from the GET API");
});

/*
 * This POST method is our second API.
 * (POST - Send data from the front-end to the back-end)
 * 
 * -----------------------------STEP 7: Create a POST API with User Schema----------------------
 * 
 * (Before moving on with STEP 7, study GIT and the commands left-in the terminal below) along with
 * Git Branching Branches in a Nutshell in the browers.
 * Follow the diagrams to understand branching conceptually!
 * 
 * LAST LEFT-OFF: Monday, October 26, 2020 22:00
 * 
 * 
 */
app.post("/", (req, res) => {
  console.log(req.body.name);
});

/*
 * Finally, you want to listen on port 3000
 * and pass in an error as one of the arguments
 * so we can log if there is an error.
 */
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on PORT", 3000);
  }
});

/*
 * This POST method is our second API.
 *
 */
