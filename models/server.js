// 3RD PARTY IMPORTS
const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT
    
    // STRING PATHS
    this.usersPath = '/api/users';

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
    // User Routes
    this.app.use(this.usersPath, require('../router/users'))
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Public
    this.app.use(express.static('public'));
  }

}

module.exports = Server;