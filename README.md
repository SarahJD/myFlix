myFlix WoMo (Women Movies)

This is the server-side of a web application called “myFlix WoMo”, an application providing information on movies by female directors (in JSON format). It includes the server, business logic, and business layers of the application. It consists of a well-designed REST API, a Node.js and Express application, and a database storing data about movies directed by women. 
The REST API can be accessed via HTTP methods (GET, POST, PUT, DELETE). Similar methods are used to retrieve data from the database using Mongoose. 
The API uses middleware modules (such as body-parser package for reading data from requests and morgan for logging) that can be inspected in the package.json file in the repository.

Who can use it? 
- frontend developers who want to build the client-side for a movie application 
- the application's target group are users that enjoy reading about movies, especially movies directed by women

What can users do with the application?
- users can access information about movies, directors, and genres
- users can create a profile (register and dregister) and save data about their favorite movies (add and delete movies from their list of favorite movies)

Which specific features does the application provide?
- return a list of all movies to the user
- return data (description, genre, director, image URL, whether movie is featured or not) about a single movie by title to the user
- return data about a director (bio, birth year, death year) by name
- allow new users to register
- allow users to update their user info (username, password, email, date of birth)
- allow users to add a movie to their list of favorites
- allow users to remove a movie from their list of favorites
- allow existing users to deregister

Which was the techstack I used building it?
- JavaScript
- Node.js
- Express
- MongoDB

What I learned during this project: 
- how to connect a database and an app using Mongoose for the business logic
- how to use Mongoose to make CRUD requests to a database
- how to design endpoints
- how to test the endpoints using Postman
- how to build a non-relational MongoDB database
- how to get MongoDB online with MongoDB Atlas
- how to use HTTP and JWT authentication 
- about data security (authentication, environment variables)
- how to deploy an application on Heroku