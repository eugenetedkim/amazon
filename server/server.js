/*
 * The Node Dependencies/Libraries
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

const app = express();

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
<<<<<<< HEAD
=======
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
>>>>>>> 1f372bc87fb80b179b614dce7d5f886d08a60a7d
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
