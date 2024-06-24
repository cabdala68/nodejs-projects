# Building Registration Form App with Node, Bootstrap & MongoDB

- This project is buildt with **Node.js** and the **Express framework** to:
  build a simple registration form with basic validation, which persists its data to a **MongoDB** database.
- Later, a view to list successful registration will be added, which weill be protected
  with basic **HTTP authentication**, and also **Bootstrap** will be added for styling.

## Requirements

- [Node.js](http://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (optional)

## Installation Steps

1. Clone repo
2. Run `npm install`
3. Create a `.env` file in the project root with database connection details
4. Start MongoDB (using `mongod`) if running locally
5. Run `npm run watch`
6. Visit http://localhost:3000 to create a new registration
7. Visit http://localhost:3000/registrations to view successful registrations
