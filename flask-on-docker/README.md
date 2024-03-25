# Flask on Docker

## Overview

This repository contains an implementation of a Flask web application Dockerized for both development and production environments. Following the the tutorial from [testdriven.io](https://testdriven.io/blog/dockerizing-flask-with-postgres-gunicorn-and-nginx), the project incorporates Flask, Postgres, Gunicorn, and Nginx, demonstrating how to handle static and user-uploaded media files. The development environment uses Flask's built-in server, while the production setup uses the Gunicorn HTTP server and Nginx as a reverse proxy. The final result is a webpage where users can upload image files, which are then stored using Docker volumes and can be retrieved.

<img src=media_upload.gif width=400px />


## Build Instructions

**To bring up the services, follow these steps:**

First, clone this repository and navigate to the project directory.

To build and run the development containers:

```
$ docker-compose up -d --build
```
Access the Flask app at http://localhost:1341/.

To stop the containers:

```
$ docker-compose down -v
```

For production, use the docker-compose.prod.yml file instead. 
Note that you will need to add your own `.env.prod.db` text file containing your database credentials.

Build and run the production containers, and initialize the PostgreSQL database:

```
$ docker-compose -f docker-compose.prod.yml up -d --build
$ docker-compose -f docker-compose.prod.yml exec web python manage.py create_db
```

Access the production Flask app at http://localhost:1337/.


To stop the production containers:

```
$ docker-compose -f docker-compose.prod.yml down -v
```
