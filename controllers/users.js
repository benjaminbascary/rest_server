// MODEL IMPORTS
const User = require('../models/user');






// GET
const getUsers = (req, res) => {
  res.json({
    message: 'GET to /api'
  });
}

// POST

/**
 * query example: 
 *  http://localhost:3000/api/users/?userName=Benjamin&lastName=Bascary&apiKey=ap234hj23kq234
 */

const postUsers = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = new User({name, email, password, role});
  // Encrypt the password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  // Save in database
  await user.save();

  res.json({
    user
  })
}

// PUT
const putUsers = (req, res) => {
  res.json({
    message: 'PUT to /api'
  });
}

// PATCH
const patchUsers = (req, res) => {
  res.json({
    message: 'PATCH to /api'
  });
}

// DELETE
const deleteUsers = (req, res) => {
  res.json({
    message: 'DELETE to /api'
  });
}

module.exports = {
  getUsers,
  postUsers,
  patchUsers,
  deleteUsers,
  putUsers
};