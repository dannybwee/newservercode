const express = require('express');
const router = express.Router();
const moviesInfo = require('../controllers/moviesInfo');
 
/**
 * 
 * These are the routes for the movies.
 * 
 */

 //Gets based on id. ID parameter is passed through and read.
router.get('/:id?',(req, res, next) => {
  if(req.params.id){
    moviesInfo.getMoviebyYear(req.params.id, (err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });

  } else { 

    //No parameter is gotten so it just goes straight to route
    moviesInfo.getAllMovies((err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

//requires you to go to localhost:4000/movies/byRating/:id? where
//the id is required after the byRating
router.get('/byRating/:id?',(req, res, next) => {
  moviesInfo.getMoviebyRating(req.params.id, (err, rows) => {
    if (err) {
        res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//requires you to go to localhost:4000/movies/byActors/:id? where
router.get('/byActors/:id?',(req, res, next) => {
  moviesInfo.getMoviebyActors(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//requires you to go to localhost:4000/movies/addMovies
//Takes the parameter of a json object. Explained in moviesinfo.js
router.post('/addMovies',(req, res) => { 
  moviesInfo.addMovies(req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  })
})

//requires you to go to localhost:4000/movies/addActor
//This attaches an actor to the movie
//Takes the parameter of a json object. Explained in moviesinfo.js
router.post('/addActor',(req, res) => { 
  moviesInfo.attachActor(req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  })
})


//requires you to go to localhost:4000/movies/UpdateMovies
//Takes the parameter of a json object. Explained in moviesinfo.js
//Update movie information
router.post('/UpdateMovies',(req, res) => { 
  moviesInfo.updateMovies(req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  })
})

//Deletes the movie from the DB. This requires just movies/id in which you type in ID
router.delete('/:id?',(req, res, next) => { 
moviesInfo.deleteMovies(req.params.id,(err, rows) => {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
});
});

 module.exports = router;
