// Router import from EXPRESS
const { Router } = require('express');
// Imports the controllers
const { getUsers, postUsers, putUsers, patchUsers, deleteUsers } = require('../controllers/users');
// Validators
const { 
  isRoleValid,
  emailExists 
} = require('../helpers/db-validators');
const { validateUserFields } = require('../middlewares/validateUserFields');
// Express-validator
const { check } = require('express-validator');




// Initialices the router and defines the routes with its controllers
const router = Router();


router.get('/', getUsers);

router.put('/', putUsers);

router.patch('/', patchUsers);

// Second argument with validators array
router.post('/', [
  check('name', 'The name is rquired.').not().isEmpty(),
  check('name', 'The name should have 2 characters minimum and 40 characters maximum.').isLength({min: 2, max: 40}),
  check('password', 'The password should have more than six characters.').isLength({min: 6, max: 20}),
  check('password', 'Password cannot be empty.').not().isEmpty(),
  check('email', 'The e-mail is not valid.').isEmail(),
  check('email').custom(emailExists),
  check('role').custom(isRoleValid),
  check('role', 'Role cannot be empty.').not().isEmpty(),
  validateUserFields
], postUsers);

router.delete('/', deleteUsers);

module.exports = router;
