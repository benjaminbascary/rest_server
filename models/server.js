const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT
    // Middlewares: will always execute with every new instance of the server
    this.middlewares();
    // App routes
    this.routes();
  }

  init() {
    this.app.listen(this.port, () => {
      console.log('Server running on port: ' + this.port);
    });
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        message: 'GET to /api'
      });
    })

    this.app.put('/api', (req, res) => {
      res.json({
        message: 'PUT to /api'
      });
    })

    this.app.post('/api', (req, res) => {
      res.json({
        message: 'POST to /api'
      });
    })

    this.app.delete('/api', (req, res) => {
      res.json({
        message: 'DELETE to /api'
      });
    })
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Public
    this.app.use(express.static('public'));
  }

}

module.exports = Server;