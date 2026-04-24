# Experiment 10 - CRUD Operations using Node.js + Express.js

## Overview
This project demonstrates CRUD (Create, Read, Update, Delete) operations on a MongoDB database using Node.js and Express.js as the backend framework.

## Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Postman** - API testing tool

## Project Structure
```
experiment10/
├── server.js              # Main server file
├── models/
│   └── Student.js         # Mongoose schema/model
├── routes/
│   └── studentRoutes.js   # API route handlers
├── package.json
└── README.md
```

## Installation & Setup

```bash
mkdir experiment10
cd experiment10
npm init -y
npm install express mongoose cors nodemon
```

## Running the Project

```bash
nodemon server.js
```

Server runs on: `http://localhost:5000`

## API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| POST   | /api/students         | Create a new record |
| GET    | /api/students         | Get all records     |
| GET    | /api/students/:id     | Get single record   |
| PUT    | /api/students/:id     | Update a record     |
| DELETE | /api/students/:id     | Delete a record     |

## API Testing (Postman)

### Create Record
- **Method:** POST
- **URL:** `http://localhost:5000/api/students`
- **Body (JSON):**
```json
{
  "name": "Krrish",
  "email": "Krrishparashar@gmail.com",
  "course": "AIML"
}
```

### Get All Records
- **Method:** GET
- **URL:** `http://localhost:5000/api/students`

### Get Single Record
- **Method:** GET
- **URL:** `http://localhost:5000/api/students/:id`

### Update Record
- **Method:** PUT
- **URL:** `http://localhost:5000/api/students/:id`
- **Body (JSON):**
```json
{
  "name": "Krrish Parashar",
  "course": "AIML"
}
```

### Delete Record
- **Method:** DELETE
- **URL:** `http://localhost:5000/api/students/:id`

## Key Concepts
- **Node.js and Express.js** are used as the backend server
- **MongoDB** stores the student records as documents
- **Mongoose** provides schema validation and model-based interactions
- **CORS** middleware allows cross-origin requests
- **REST APIs** follow standard HTTP methods for CRUD operations
