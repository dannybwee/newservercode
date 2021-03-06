const express = require('express');
const path = require ('path')
const cors = require('cors')
const router = express.Router();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const movies = require('./routes/movies');  
const actors = require('./routes/actors');  
const app = express();

/**
 * 
 * Main part of the application. Sets up routes, and port numbers.
 * 
 */

//Parases the json req object to be used in later queries
app.use(bodyParser.json());

// Connect/Express middleware
app.use(cors())

//routes
app.use('/movies', movies)
app.use('/actors', actors)

//base route
app.get('/', (req, res) => {
  res.send('Connected Successfully');
});

//The 404 Route 
app.get('*', (req, res) => {
  res.sendStatus(404);
});

//Start server
app.listen(port, () => {
  console.log('listening on port ' + port)
});

