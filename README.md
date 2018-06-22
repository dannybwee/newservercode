# servercode

IMDB movie database assignment.

Steps to starting application:

step 1: run "npm install"

step 2: inside the image folder, there is an imdb.sql file. This file is an export of the local database I used to test the application. Within the sql file should contain all data/tables.

    to import open mysql workbench.
    1. open mysql workbench and navigate to management window
    2. there's a button called data import/restore, click it
    3. import from self contained file and import the imdb.sql file.
    4. make sure the schema is named finalimdb just in case
    
step3: in the config file of the folder, you will see a secrets.js within this file, change the information that you need to log into the database.

step4: once the database is configured. run the application by typing "node app.js"

step5: open up postman to get data.

    Required Features:
    step5.a: get all movies
    Step5.b: get movies based on year. This function also takes in partial years. Ex(199, 20, 1, 2000)
    Step5.c: get all movies based on rating: this function takes a number and gets the rating that is that rating or close to       it.
    step5.d: get all movies based on actor
    step5.e: add movies: This is a post request that takes in a json object. Make sure it's post and json object or it won't        work.

Extra Features
    updatemovies: This updates the movie based on parameters. You must know the ID for the update to work. It takes in a json object similar to add movies, but requires the imdbID
    deletemovies: This deletes movie based on id. the response should be a res from the database saying it was successful
    attachactor: this attaches an actor to the movie. This must take in 2 ids. The actor ID(we will get to later) and the movie ID

There is also actor database you can route to
    /actors brings up the entire actors in the database
    /actors/'id' searches actors based on id





