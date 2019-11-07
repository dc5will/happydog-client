# Happy Dog
### https://happydog-app.dc5will.now.sh/

## Objective
Build a full stack web application with React, Node, Express, CSS3 and PostgreSQL. 

## Introduction

Take the guesswork out of making sure your dogs are happy by keeping track of all of their basic needs. Ensure someone in your family takes care of your furry friend's basic needs and more. Sometimes life is hectic and we're not sure if our furry family members have been taken care of. Utilize the easy to use daily checklist with your family to make sure someone in your family has fed and/or walked your dog. Keep secured important notes and tasks for your dog. Consolidate notes of your dog's most important needs and assign tasks with dates in order to keep your dog healthy and happy.

## Screenshots
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

### Landing Page
![Alt text](https://github.com/dc5will/happydog-client/blob/master/screenshots/landingpage.jpg)

### Login
![Alt text](https://github.com/dc5will/happydog-client/blob/master/screenshots/login.jpg)

### Dashboard
![Alt text](https://github.com/dc5will/happydog-client/blob/master/screenshots/homepage2.jpg)

### Task Page
![Alt text](https://github.com/dc5will/happydog-client/blob/master/screenshots/taskpage.jpg)

## Setting Up

- `git clone git@github.com:dc5will/happydog-server.git`
- Install dependencies: `npm install`
- Create development and test databases: `createdb happydog`, `createdb happydog-test`
- Create database user: `createuser happydog`
- Grant privileges to new user in `psql`:
  - `GRANT ALL PRIVILEGES ON DATABASE happydog TO happydog`
  - `GRANT ALL PRIVILEGES ON DATABASE happydog-test TO happydog` or `GRANT ALL PRIVILEGES ON DATABASE "happydog-test" TO happydog`;
- Prepare environment file: `cp example.env .env`
  - Replace values in `.env` with your custom values if necessary.
- Bootstrap development database: `MIGRATION_DB_NAME=happydog npm run migrate`
- Bootstrap test database: `MIGRATION_DB_NAME=happydog-test npm run migrate`

## Sample Data

- To seed the database for development: `psql -U happydog -d happydog -a -f seeds/seed.happydog_tables.sql`
- To clear seed data: `psql -U happydog -d happydog -a -f seeds/trunc.happydog_tables.sql`
- To seed the database for testing: `psql -U happydog -d happydog-test -a -f seeds/seed.happydog_tables_test.sql`

## Scripts

- Start application for development: `npm run dev`
- Run tests: `npm test`

## Server / API

- https://github.com/dc5will/happydog-server
- https://mighty-escarpment-98165.herokuapp.com/

## Tech/framework used

### Client
- [React](https://github.com/facebook/react)
- [React Context](https://reactjs.org/docs/context.html)
- [Jest](https://jestjs.io/) - Testing
- [Enzyme](https://airbnb.io/enzyme/) - Testing
- [Zeit](https://zeit.co/)

### Server
- [Node](https://github.com/nodejs/node)
- [NPM](https://www.npmjs.com/)
- [Express.js](https://github.com/expressjs/express)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex.js](https://knexjs.org/)
- [Mocha](https://mochajs.org/) - Testing
- [Chai](https://www.chaijs.com/) - Testing
- [Supertest](https://www.npmjs.com/package/supertest/) - Testing
- [Heroku](https://www.heroku.com/)

## Resources
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [AirBnB Coding Standards](https://github.com/airbnb/javascript)

