#!/bin/bash

echo "🚀 Starting deployment..."

# Check Docker
if ! command -v docker &> /dev/null
then
    echo "[ERROR] Docker is not installed."
    exit 1
fi

# Check Docker Compose
if ! docker compose version &> /dev/null
then
    echo "[ERROR] Docker Compose is not installed."
    exit 1
fi

echo " Docker and Docker Compose are installed."

# Stop existing containers and remove volumes
echo " Stopping old containers..."
docker compose down -v

# Build and start containers
echo " Building and starting containers..."
docker compose up --build -d

# Final success message
echo "[SUCCESS] Application is live at http://localhost"
