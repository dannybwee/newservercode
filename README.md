# servercode

IMDB movie database assignment.

Steps to starting application:

Step 1: run "npm install"

Step 2: inside the folder there is an imdb.sql file. This file is an export of the local database I used to test the application. Within the sql file should contain all data/tables.

    to import open mysql workbench.
    1. open mysql workbench and navigate to management window
    2. there's a button called data import/restore, click it
    3. import from self contained file and import the imdb.sql file.
    4. make sure the schema is named finalimdb just in case
    
Step 3: in the config file of the folder, you will see a secrets.js within this file, change the information that you need to log into the database. (localhost, user, pass, port, ect)

Step 4: once the database connection is configured. run the application by typing "node app.js"

Step 5: open up postmat
        Some sample features and post/delete/get requests:

    Required Features:
    Step 5.a: get all movies
   ![](https://user-images.githubusercontent.com/7842356/41787870-9a10d120-75fe-11e8-920b-eacd55a8d1b9.png)
   ![](https://user-images.githubusercontent.com/7842356/41787904-b2eb6aac-75fe-11e8-810b-b9e47a7ff312.png)
    
    
    Step 5.b: get movies based on year. This function also takes in partial years. Ex(199, 20, 1, 2000) In this example, this        uses 1990
   ![](https://user-images.githubusercontent.com/7842356/41787905-b30628c4-75fe-11e8-9296-f8796d39e186.png)
   ![](https://user-images.githubusercontent.com/7842356/41787906-b31e8130-75fe-11e8-8ef8-cbbe8a2b9837.png)
    
    Step 5.c: get all movies based on rating: this function takes a number and gets the rating. It gets close to that rating        or the rating itself.
   ![](https://user-images.githubusercontent.com/7842356/41787907-b335eabe-75fe-11e8-886d-94989d2f4c8f.png)
   ![](https://user-images.githubusercontent.com/7842356/41787908-b34db9c8-75fe-11e8-8def-7e360505a706.png)
    
    Step 5.d: get all movies based on actor. This returns the actor who name you searched and the movie data that they are in.
   ![](https://user-images.githubusercontent.com/7842356/41787909-b365443a-75fe-11e8-86cb-6f96d4ef861d.png)
   ![](https://user-images.githubusercontent.com/7842356/41787910-b3831f8c-75fe-11e8-8f39-3254b0a5275d.png)
    
    
    Step 5.e: add movies: This is a post request that requires a json object. Make sure it's post and json object or it won't        work. Also the json object needs to be exactly with those fields.
   ![](https://user-images.githubusercontent.com/7842356/41787911-b39b4c24-75fe-11e8-9d3c-9b943c0a927b.png)


   Extra Features
    
    updatemovies: This updates the movie based on parameters. You must know the ID for the update to work. It takes in a json     object similar to add movies, but requires the imdbID.
   ![](https://user-images.githubusercontent.com/7842356/41787912-b3b4958a-75fe-11e8-9546-50cf109b6154.png)
    
    deletemovies: This deletes movie based on id. the response should be a res from the database saying it was successful
   ![](https://user-images.githubusercontent.com/7842356/41787913-b3cc81e0-75fe-11e8-9df6-e727d73ea7ed.png)
   
    attachactor: this attaches an actor to the movie. This must take in 2 ids. The actor ID(we will get to later) and the         movie ID. This example does not work but shows format. 
   ![](https://user-images.githubusercontent.com/7842356/41787914-b3e600b6-75fe-11e8-8959-7def981095ab.png)

    There is also actor database you can route to   
    /actors brings up the entire actors in the database
   ![](https://user-images.githubusercontent.com/7842356/41787916-b406d8b8-75fe-11e8-9070-d35e40083ceb.png)

    /actors/'id' searches actors based on id
   ![](https://user-images.githubusercontent.com/7842356/41787917-b41da0e8-75fe-11e8-95b3-451f5b9cfb3f.png)
   
    /actors/name searches for actors based on name. This also takes partials too(tom, to, om)
   ![](https://user-images.githubusercontent.com/7842356/41787918-b4366236-75fe-11e8-95c0-b5fa57d4b2ef.png)
   
    /actors/addActors: this adds actors to the database.
   ![](https://user-images.githubusercontent.com/7842356/41787921-b46bff54-75fe-11e8-8c38-151de0fa9073.png)

    delete actors: this deletes the actors
    /actors
    https://user-images.githubusercontent.com/7842356/41787923-b4a52ffe-75fe-11e8-96f0-f540c7aac6bd.png


