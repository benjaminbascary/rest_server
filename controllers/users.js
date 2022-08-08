// MODEL IMPORTS
const User = require('../models/user');

// 3RD PARTY
const bcryptjs = require('bcryptjs');




// GET
const getUsers = async (req, res) => {
  const { limit = 10, offset = 0 } = req.query;

  const query = {status: true};

  const response = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(offset)).limit(limit)
  ]);
  
  const [ total, users ] = response;

  res.json({
    total,
    offset: Number(offset),
    limit,
    count: users.length,
    users
  });
}

// POST

const postUsers = async (req, res) => {
  

  const { name, email, password, role } = req.body;
  const user = new User({name, email, password, role});

  // Encrypt the password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  // Save in database
  await user.save();

  res.json(user)
}


// PUT
const putUsers = async (req, res) => {
  const id = req.params.id;
  const { _id, password, google, ...rest } = req.body;

  if (password) {
    // Encrypt the password
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest);

  res.json(user);
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