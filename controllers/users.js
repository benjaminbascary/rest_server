// MODEL IMPORTS
const User = require('../models/user');

// 3RD PARTY
const bcryptjs = require('bcryptjs');




// GET
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json({
    users: users
  });
}

// POST

const postUsers = async (req, res) => {
  

  const { name, email, password, role } = req.body;
  const user = new User({name, email, password, role});

  // Verify if email already exists
  const emailExists = await User.findOne({ email: email});
  if (emailExists) {
    return res.status(400).json({
      error: 'The e-mail is already in use!'
    })
  }


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