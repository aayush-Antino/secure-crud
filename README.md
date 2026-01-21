# Secure-CRUD Application

A robust CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB, containerized using Docker.

## Features

- **RESTful API**: Full CRUD operations for "items".
- **Database**: MongoDB for data persistence.
- **Containerization**: Fully containerized using Docker and Docker Compose.
- **Reverse Proxy**: Nginx configured as a reverse proxy.
- **Environment Configuration**: Easy configuration using `.env` files.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## getting Started

### 1. Clone the repository
```bash
git clone <repository_url>
cd Secure-CRUD
```

### 2. Configure Environment Variables
Ensure you have a `.env` file in the root directory. Example configuration:
```env
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
MONGO_URI=mongodb://root:example@mongo:27017/secure-crud-db?authSource=admin
PORT=5000
```

### 3. Run the Application
Use Docker Compose to build and start the services:

```bash
docker-compose up --build
```
The application will be accessible at `http://localhost:80` (via Nginx) or `http://localhost:5000` (directly to the app if port mapped).

To stop the application:
```bash
docker-compose down
```

## API Documentation

### Base URL
`http://localhost:5000` (or `http://localhost` if accessing via Nginx)

### Health Check
- **GET /`**
  - Returns a message indicating the API is running.

### Items Endpoints

#### Create Item
- **URL**: `/items`
- **Method**: `POST`
- **Body**:
  ```json
  {
      "name": "Item Name",
      "description": "Item Description"
  }
  ```
- **Response**: 201 Created

#### Get All Items
- **URL**: `/items`
- **Method**: `GET`
- **Response**: 200 OK (Array of items)

#### Get Single Item
- **URL**: `/items/:id`
- **Method**: `GET`
- **Response**: 200 OK or 404 Not Found

#### Update Item
- **URL**: `/items/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
      "name": "Updated Name",
      "description": "Updated Description"
  }
  ```
- **Response**: 200 OK or 404 Not Found

#### Delete Item
- **URL**: `/items/:id`
- **Method**: `DELETE`
- **Response**: 200 OK or 404 Not Found

## Project Structure

```
Secure-CRUD/
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile          # Dockerfile for Node.js app
├── nginx/              # Nginx configuration
├── src/
│   ├── app.js          # App entry point
│   └── routes/         # API routes
└── .env                # Environment variables
```

## Technologies Used

- **Node.js**: JavaSript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **Nginx**: Web server and reverse proxy.
- **Docker**: Containerization platform.
