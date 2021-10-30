# GA-Project3-MovieDB-Frontend
Project 3 for General Assembly to create a Movie favorite list database with the aid of APIs

Project Name: 
Search Flix

Description: 
This App is designed for anyone who loves watching movies and those who would like to know more about the movies they watch. This app solves the problem of how to find films, while also saving them to a favorites list, making it easier to plan for movie nights, etc. The app will be built with React and will fetch movie data by title or by IMDB number, from the Open Movie Database (OMDb), an open source API that provides much of the same movie data as IMDb.

Movie fans are constrained by factors that include:
Time, and
Money

Given these constraints, movie fans value functionality that enables them to:
Identify movies for immediate viewing, and
Maintain a list of movie titles for viewing at a later date.
Consider additional information about a movie as part of the decision making process.

Routes:

METHOD |       Route       | What it do
-----------------------------------------------------------
 GET   |   /favorites      | Returns an array of the favorited movies
-----------------------------------------------------------
 POST  |   /favorites      | Create a new favorited movie 
-----------------------------------------------------------
 PUT   |   /favorites/:id  | Updates the favorited movie with the corresponding ID
-----------------------------------------------------------
 DELETE|   /favorites/:id  | Deleted the favorited movie with the corresponding ID
 
 

MVP Goals
Ability to search by movie title
View additional information about a movie
Allow users to create a list of movie favorites
Allow users to update the status of a movie to show it has been viewed
Allow users to delete a movie from their favorites list

Stretch Goals
Adding functionality for users to login, user management, and connecting the two models of Users and Favorites.


