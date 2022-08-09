// Router import from EXPRESS
const { Router } = require('express');
// Imports the controllers
const { 
  postLoginController,
  getLoginController
} = require('../controllers/auth');
// Express-validator
const { check } = require('express-validator');
// Helper Validator
const { validateUserFields } = require('../middlewares/validateUserFields');




// Initialices the router and defines the routes with its controllers
const router = Router();

router.get('/login', [], getLoginController)

router.post('/login',[
  check('email', 'The e-mail is not valid.').isEmail(),
  check('password', 'The password cannot be empty').not().isEmpty(),
  check('password', 'The password should have more than six characters.').isLength({min: 6, max: 20}),
  validateUserFields
], postLoginController);

module.exports = router;