const express = require('express');
const router = express.Router();

var db = require('../dbconnection');

var actors = {
  
   /**
   * 
   * This query gets all actors within the movie database.
   * 
   */
  
  getAllActors: (callback) => {
    return db.query("SELECT * FROM actors", callback);
  },

  //this function gets actors based on ID. Also checks for partial names
  //passes in the parameter of actor's name
  getActorsbyID: (id, callback) => {
    //parses the int to check if the id is just a number
    if (id == parseInt(id)) {
      return db.query("SELECT * FROM actors WHERE id = ?",[id],callback)
    } else {

    //This allows for "like" clause to work
    id = ('%' + id + '%')
    //Checks to see if the passed parameter has a space in the name. Partials. Harry Har, Potte
      return db.query("SELECT * FROM actors WHERE UPPER(name) LIKE UPPER(?)",[id],callback)
    }
  },

  

  //Adds actor to the database. This takes in only 1 parameter, name of the actor.
  //still requires a json object
  addActor: (req, callback) => {
    let actor = req;
    var query = "	INSERT INTO actors(name) VALUES (?);";
    return db.query(query,[actor.name], callback)
  },
  
  //Deletes actor based on ID
  deleteActors: (id, callback) => {
    return db.query ("DELETE FROM actors WHERE ID =?", [id],callback)
  }
  
}

module.exports = actors