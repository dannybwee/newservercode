const express = require('express');
const router = express.Router();
const actorsInfo = require('../controllers/actorsInfo');
 
 /**
  * 
  * These are the routes for actors. 
  * 
  */
 //gets actor by ID. Passes in the params of integer
 router.get('/:id?', (req, res, next) =>  {
    if(req.params.id){
      actorsInfo.getActorsbyID(req.params.id, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    
    } else {  
    
      //gets all actors if no params are passed
      actorsInfo.getAllActors((err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
});

//adds actor to the actor table
//Takes the parameter of a json object. Explained in actorsInfo.js
router.post('/addActor', (req, res) => { 
    console.log(req.body)
    actorsInfo.addActor(req.body, (err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    })
  }),

//delete actor based on ID
router.delete('/:id?', (req, res, next) => { 
  actorsInfo.deleteActors(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
