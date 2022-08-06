// Router import from EXPRESS
const { Router } = require('express');
// CHECKER MIDDLEWARE
const { check } = require('express-validator');
// Imports the controllers
const { getUsers, postUsers, putUsers, patchUsers, deleteUsers } = require('../controllers/users');

// Initialices the router and defines the routes with its controllers
const router = Router();



router.get('/', getUsers);

router.put('/', putUsers);

router.patch('/', patchUsers);

// Second argument with validators array
router.post('/', [
  check('email', 'The e-mail is not valid.').isEmail(),
], postUsers);

router.delete('/', deleteUsers);

module.exports = router;
