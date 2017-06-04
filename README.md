# Peer Angular Challenge - Real Estate List 
Peer challenge appending to the DOM using angular

## Instructions We Were Given

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
1. Download .zip of the project
2. npm install
3. npm start
4. type localhost:5000 into a browser

## Authors
- Craig Baird 
- Kevin Dahlberg

## Technologies Used
- JavaScript
- Angular
- Express
- Node
- MongoDB

In this assignment, we are going to work with the list of information provided in the previous weekend challenge. 
It has been updated for correct Javascript notation for an array. Meaning that you are not working with the response from 
a server, but rather just an array of inforamtion. 

Your goal is to append the information onto the DOM, just as you did in the weekend challenge. But without the use of jQuery.

## Base Mode
Append the information to the DOM, just as you did in the weekend challenge, but use Angular. No need to create the input 
form as we had it before. Just the listing of real estate property are needed here. Use Bootstrap of course! The data is 
provided in another JS file that has already been sourced in, and then logged in the main 'client.js' file.

## Hard Mode
Add ng-click functionality to delete the individual enteries when clicked. Checkout this Codepen for help in discovering how to do that!
http://codepen.io/docix/pen/bqJNRr

## Pro Mode
Instead of clicking on the element container to delete the information, create a button inside the container that delete the whole parent container.
Just like we did in jQuery ( jQuery code example, $(this).parent().remove() ). 
