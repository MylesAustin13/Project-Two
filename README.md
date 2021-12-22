# PROJECT TWO

## Project Description

A webapp serving as an interface for a mock donut delivery service. 

## Technologies Used

* React
* Spring Boot
* Java
* JavaScript
* BootStrap / CSS
* JUnit

## Features

### Customers can...
* Log in/out
* Register for a new account
* Navigate to different pages using a toggleable sidebar
* View donuts to purchase
* Search for donuts (filtering)
* Add/remove donuts to/from a cart
  * Cart is in a sidebar, visible from any page when logged in
  * Crt displays the current subtotal
  * Cart persists on refresh/tab close
* Add/remove donuts to/from a list of favorites
  * Favorited items can be added to the cart 
* Checkout with their current cart
  * Subtotal and items are visible to the customer 
* Change the address they assigned when registering
* View their previous donut orders
 * Filter these orders based on the date/time.
 * Orders display a progress bar that fills over a few minutes, to emulate the baking/delivery process. 

To-do list:
* Clear cart when logging out (When logging into another account, the cart from the first carries over)


## Usage

* Clone the repository
* Open the Java Project (folder named SpringBootProject)
* Configure the settings in the application.properties file to match how mysql is running on your end (username, password, port, etc)
* Open the React App (all other files, the Java Project is inside it)
* The calls to the backend default to localhost:8080, so change this where needed if you changed the port
* Use npm install to get the necessary libraries.
* Run the Java Project
* The database is locally maintained, populate tables as needed
* Use npm start to run the application.

## Contributors

* Myles Austin
* Lucas Uzoka

