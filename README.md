# Contacts-App
A simple contacts app which helps to create, view and edit the contacts. 


## Dependencies
- #### npm -V 6.14.5
- #### node -V 12.13.1

## Features
- Create, view and edit a contact.

## Tech Stack
- [**Nx**](https://nx.dev/angular) - for Workspace
- [**Angular**](https://angular.io/) - for Front-end Framework
- [**NEST**](https://docs.nestjs.com/) - for Back-end Framework
- [**MongoDB**](https://www.mongodb.com/) - for Databse
- [**Docker**](https://docs.docker.com/desktop/#download-and-install) - for production generation
- [**Docker-compose**](https://docs.docker.com/compose/install/) - for running the production app

## Steps to run the project
#### Classical Way

- Clone the project
 --`git clone <projectUrl>`

- Install the dependencies
 --`cd contacts-app && npm i`

- Run the frontend
 --`./node_modules/.bin/ng serve`

- Run the backend
 -- `./node_modules/.bin/ng serve api`
 
#### Easy Way

- Clone the project
 --`git clone <projectUrl>`
- Navigate to docker folder
 -- `cd contacts-app/docker`
- Build the docker
 -- `docker-compose up -d --build`
 
 
