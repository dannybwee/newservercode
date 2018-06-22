const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

let movies = {

  /**
   * 
   * The route /movies will return all the data FROM the movies table. 
   * This checks to see if the route is just /movies.
   *(@callback = query)
   *
   */

  getAllMovies: (callback) => {
    let query = "SELECT a.*, GROUP_CONCAT(c.name) AS `Actors` \
    FROM movies a \
      LEFT JOIN movie_actor b ON b.movie_id = a.imdbID \
      LEFT JOIN actors c ON b.actor_id = c.id \
    GROUP BY a.imdbID"
    return db.query(query, callback);
  },

  /**
   * 
   * The route /movies/("insert movie id or title here") will return the movie with a certain id or title. 
   * If the passed paramater is an ID, it will do the first query and check to see if the ID of the movie is located inside.
   * (Note* that you must use an IMDB id to use the ID function)
   * (@id = parameter in the postman line, @callback = the query response)
   * Is not case sensitive and can return movies regardless of whether or not you capitalize the first letter or any letters. 
   * 
   */
  getMoviebyYear: (id, callback) => {
    
    if (id == parseInt(id)) {
      id = ('%' + id + '%')
      //changes the query so it's capable of "like" clause
      let query = "SELECT a.*, GROUP_CONCAT(c.name) AS `Actors` \
      FROM movies a \
        LEFT JOIN movie_actor b ON b.movie_id = a.imdbID \
        LEFT JOIN actors c ON b.actor_id = c.id \
      WHERE a.year like ?\
      GROUP BY a.imdbID"
      return db.query(query, [id], callback)
    } else {
      id = ('%' + id + '%')
    //else return just 1 word queries
     let query = "SELECT a.*, GROUP_CONCAT(c.name) AS `Actors` \
      FROM movies a \
        LEFT JOIN movie_actor b ON b.movie_id = a.imdbID \
        LEFT JOIN actors c ON b.actor_id = c.id \
        WHERE UPPER(title) LIKE UPPER(?) \
        GROUP BY a.imdbID"
      return db.query(query, [id], callback)
    }
    
  },

  getMoviebyRating: (id, callback) => {
    // id = ('%' + id + '%')
   let query = "SELECT a.*, GROUP_CONCAT(c.name) AS `Actors` \
    FROM movies a \
      LEFT JOIN movie_actor b ON b.movie_id = a.imdbID \
      LEFT JOIN actors c ON b.actor_id = c.id \
    WHERE rating >= (? * .9) and rating <= (? * 1.08)\
    GROUP BY a.imdbID\
    ORDER BY abs(? - 7.4) "
      return db.query(query, [id, id, id], callback)
  },

  getMoviebyActors: (id, callback) => {
    id = ('%' + id + '%')
    let query = "SELECT a.name, m.title, m.year, m.rating, m.plot \
      FROM finalimdb.actors a\
      JOIN movie_actor ma ON (ma.actor_id = a.id)\
      JOIN movies m ON (m.imdbID = ma.movie_id)\
      WHERE UPPER(a.name) LIKE UPPER(?)"
      return db.query(query, [id], callback)

      // SELECT * FROM tab ORDER BY abs(val - $val) LIMIT 1

  },



  /**
   * 
   * This attaches an actor to a movie based on actor id and movie. It accepts 2 inputs FROM req. 
   * Right now you need to know the actor's id and the movie id in which you want to attach the actor to.
   * @req = {
   * imdbID: ""
   * id: ""
   * }
   * 
   */
  attachActor: (req, callback) => {
    let movies = req;
    let query = "Insert into movie_actor (movie_id, actor_id) values(?, ?);";
    return db.query(query,[movies.imdbID, movies.id], callback)
  },


 /**
  * 
  * This query adds a movie to the database. 
  * requires a json file in req to be passed back containing
  * (@req) = { 
  * title: ""
  * year: ""
  * released: ""
  * runtime: ""
  * director: ""
  * plot: ""
  * rating: ""
  * }
  * (@callback = query response)
  * 
  * This does not check for duplicates. To check for duplicates I would check most likely in the front end
  */
  addMovies: (req, callback) => {
    console.log(req)
    //accepts the req object.
    let movies = req;
    let query = "INSERT INTO movies(title, year, released, runtime, director, plot, rating)\
    VALUES (?, ?, ?, ?, ?, ?, ?);";
    return db.query(query,[movies.title, movies.year, movies.released, movies.runtime ,movies.director, movies.plot, movies.rating] ,callback)
  },

  /*requires you to know an id of the IMDB. In a web application, the ID would be well known. But to pass in the ID,
  *you would need to search the database for the movie first then update the information.
  *  * (@req) = { 
  * title: ""
  * year: ""
  * released: ""
  * runtime: ""
  * director: ""
  * plot: ""
  * rating: ""
  * id: ""
  * }
  * (@callback = query response)
  * but for now, you have to search by ID first then update based on id
  */
  updateMovies: (req, callback) => {
    //accepts the req object.
    let movies = req;
    let query = "	UPDATE finalimdb.movies SET title = ?, year = ?, \
    released = ?, runtime = ?, director = ?, \
    plot = ?, rating = ?\
    WHERE movies.imdbID = ?;";
    return db.query(query,[movies.title, movies.year, movies.released, movies.runtime ,movies.director, movies.plot, movies.rating, movies.imdbID], callback)
  },


  //Simple function to delete movies based on ID
  deleteMovies: (id, callback) => {
    let query = "DELETE FROM MOVIES WHERE imdbID =?"
    return db.query (query, [id], callback)
  }
};






module.exports = movies;