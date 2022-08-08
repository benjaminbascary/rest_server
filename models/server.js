// 3RD PARTY IMPORTS
const express = require('express');
const cors = require('cors');

// LOCAL IMPORTS
const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT
    this.usersPath = '/api/users';
    this.authPath = '/api/auth';

    // INITIALICES DATA BASE CONNECTION
    this.connectDataBase();

    // INITIALICES THE MIDDLEWARES
    this.middlewares();
    // INITIALICES THE ROUTER
    this.routes();
  }

  init() {
    this.app.listen(this.port, () => {
      console.log('Server running on port: ' + this.port);
    });
  }

  routes() {
    // Auth Routes
    this.app.use(this.authPath, require('../router/auth'))
    // User Routes
    this.app.use(this.usersPath, require('../router/users'))
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Public
    this.app.use(express.static('public'));
    // Body parser
    this.app.use(express.json());
  }

  async connectDataBase() {
    await dbConnection();
  }

}

module.exports = Server;