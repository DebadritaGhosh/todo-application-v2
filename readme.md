# Backend Server for Awesome TODO App

Welcome to the backend repository for the Awesome TODO App! This section handles the server-side logic, authentication, and database operations.

## Getting Started

To get this server up and running locally, follow these steps:

1. **Installation:** Clone this repository and run `npm install` to install dependencies.
2. **Environment Variables:** Create a `.env` file and set up necessary variables (e.g., database credentials, secret keys).
3. **Start Server:** Execute `npm start` to start the server.

## API Endpoints

### User Management
- **POST /api/v1/auth/register**: Register a new user.
- **POST /api/v1/auth/login**: Log in an existing user.

### TODO Operations
- **POST /api/v1/todo**: Add a new TODO item.
- **PUT /api/v1/todo/:todoId**: Edit a TODO item.
- **DELETE /api/v1/todo/:todoId**: Delete a new TODO item.

## Technologies Used For Backend

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</div>

