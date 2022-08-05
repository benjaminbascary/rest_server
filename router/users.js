// Router import from EXPRESS
const { Router } = require('express');
// Imports the controllers
const { getUsers, postUsers, putUsers, patchUsers, deleteUsers } = require('../controllers/users');

// Initialices the router and defines the routes with its controllers
const router = Router();



router.get('/', getUsers);

router.put('/', putUsers);

router.patch('/', patchUsers);

router.post('/', postUsers);

router.delete('/', deleteUsers);

module.exports = router;
