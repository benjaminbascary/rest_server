// Router import from EXPRESS
const { Router } = require('express');
// Imports the controllers
const { 
  postLoginController,
  getLoginController
} = require('../controllers/auth');
// Express-validator
const { check } = require('express-validator');




// Initialices the router and defines the routes with its controllers
const router = Router();

router.get('/login', [], getLoginController)

router.post('/login',[

], postLoginController);

module.exports = router;