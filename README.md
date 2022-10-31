# budget
  ## Description
  budget is an online budget tracking app that flexibly calculates how much of your budget you have left after every expense you list. In our application the user can create multiple budgets, and add expenses within these budgets to calculate how much of their budget they have used. It is up to the user what they want to name budgets, and how they want to subtract from their budget with their expenses.
  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
This application is distributed under the [MIT](https://opensource.org/licenses/MIT) license.
  ## Table of contents
  - [License](#License)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Tests](#Tests)
  - [Contributions](#Contributions)
  ## Usage
  To create a budget, first you must create a account which will be the opening page as you enter the application. Users can also signout and back out to the login page at anytime by using the navbar logout link. After creating an account the user will be brought to the dashboard where they will be given the option to create a new budget and be rerouted to the build budget page. After creating an budget, users will see this newly created budget in their dashboard where they can click on and be taken to the create expense page. This page will allow the user to create expenses and see the remaining amount of their budget after tallying every expense.
  ## Installation
  The user simply needs to use the [heroku](https://bloodcurdling-vampire-96793.herokuapp.com/) website to access the web application and create an account. Then, they can create their budget immediately to their own criteria. If the user wants to run the application on their local machine this application requires npm package dependencies. To run this application locally on your computer, in your terminal command line, run: ```npm install```. In order to access the database you will need to establish an environment variable file ```.env``` in the root of your file system. Attached to this application will be a ```.env.SAMPLE``` folder that you can replace DB_PW='YOUR PASSWORD'. Next, you will need to source the SQL databse, in your terminal command line, run: ```my sql -uroot -p``` and enter your SQL login credntials. Once logged in, run: ```source db/schema.sql``` then ```quit```. Once you have sourced the schema.sql run: ```node seeds/index``` and ```npm start``` to be able to access ```http://localhost:3001/```.
  ## Tests
  N/A
  ## Contributors
  Contributors: 
  Amy Wilford, Salman, Jordan Heath
  ## Questions
  Find us on GitHub: <https://github.com/AmyWilford> <br> <https://github.com/jwiz9> <br> <https://github.com/456salman>
