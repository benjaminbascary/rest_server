// Router import from EXPRESS
const { Router } = require('express');
// Imports the controllers
const { getUsers, postUsers, putUsers, patchUsers, deleteUsers } = require('../controllers/users');
// Validators
const { validateUserFields } = require('../middlewares/validateUserFields');
// Express-validator
const { check } = require('express-validator');
// Models for validating incoming requests
const Role = require('../models/role');




// Initialices the router and defines the routes with its controllers
const router = Router();


router.get('/', getUsers);

router.put('/', putUsers);

router.patch('/', patchUsers);

// Second argument with validators array
router.post('/', [
  check('email', 'The e-mail is not valid.').isEmail(),
  check('name', 'The name is rquired.').not().isEmpty(),
  check('name', 'The name should have 2 characters minimum and 40 characters maximum.').isLength({min: 2, max: 40}),
  check('password', 'The password should have more than six characters.').isLength({min: 6, max: 20}),
  check('password', 'Password cannot be empty.').not().isEmpty(),
  //check('role', 'The role is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(async (role = '') => {
    // if custom validation does not throw new Error it passes
    const roleExists = await Role.findOne({role: role});
    if (!roleExists) {
      throw new Error(`The role >${role}< is not registered in DB`);
    }
  }),
  check('role', 'Role cannot be empty.').not().isEmpty(),
  validateUserFields
], postUsers);

router.delete('/', deleteUsers);

module.exports = router;
