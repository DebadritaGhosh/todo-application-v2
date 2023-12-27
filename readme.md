# Backend Server for Awesome TODO App

Welcome to the backend repository for the Awesome TODO App! This section handles the server-side logic, authentication, and database operations.

## Getting Started

To get this server up and running locally, follow these steps:

1. **Installation:** Clone this repository and run `npm install` to install dependencies.
3. **Environment Variables:** Create a `.env` file and set up necessary variables (e.g., database credentials, secret keys).
4. **Start Server:** Execute `npm start` to start the server.

## API Endpoints

### User Management
- **POST /api/v1/register**: Register a new user.
- **POST /api/v1/login**: Log in an existing user.

### TODO Operations
- **POST /api/v1/todo**: Add a new TODO item.


## Technologies Used For Backend
- Node.js
- Express
- MongoDB _(or your preferred database)_
- JWT for authentication
