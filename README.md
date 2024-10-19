# Face Recognition System

This project is a Time and Attendance System with Face Recognition capabilities built using Angular for the frontend and .NET Core for the backend. 

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Docker Commands](#docker-commands)
- [Angular Commands](#angular-commands)
- [Accessing the Application](#accessing-the-application)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 18.19 or higher)
- Angular CLI
- Docker
- .NET Core SDK

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://your-repo-url.git
    cd facerecognition
    ```

2. Install the necessary packages:
    ```bash
    npm install
    ```

3. Build the application:
    ```bash
    ng build --configuration production
    ```

## Docker Commands

To build and run the application using Docker, follow these commands:

1. **Build the Docker image**:
    ```bash
    docker build -t facerecognition .
    ```

2. **Run the Docker container**:
    ```bash
    docker run -d -p 8081:80 facerecognition
    ```

## Angular Commands

To serve the Angular application locally, you can use the Angular CLI commands:

1. **Serve the application**:
    ```bash
    ng serve
    ```

This command starts the application in development mode and watches for file changes.

## Accessing the Application

- For the Dockerized application, open your browser and go to [http://localhost:8081/](http://localhost:8081/).
  
- For the local Angular application served via `ng serve`, open your browser and go to [http://localhost:4200/](http://localhost:4200/).

## Contributing

Contributions are welcome! Please follow the standard Git workflow:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
