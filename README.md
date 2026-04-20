# DevOps CI/CD Project

## Project Overview
A Node.js web application demonstrating a complete DevOps workflow using GitHub Actions, Docker, and Docker Compose.

## Tools Used
- Node.js + Express
- Jest (Testing)
- Docker
- Docker Compose
- GitHub Actions (CI/CD)
- Docker Hub

## Project Structure
devops-app/
├── src/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── .github/workflows/
└── README.md

## Steps to Run Locally

### Run the app
node index.js

### Run tests
npm test

### Run with Docker
docker build -t devops-app .
docker run -p 3000:3000 devops-app

### Run with Docker Compose
docker-compose up

## CI/CD Explanation
Every push to GitHub triggers the CI pipeline which:
1. Installs dependencies
2. Runs automated tests
3. Builds Docker image
4. Pushes image to Docker Hub