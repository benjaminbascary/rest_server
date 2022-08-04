// GET
const getUsers = (req, res) => {
  res.json({
    message: 'GET to /api'
  });
}

// POST
const postUsers = (req, res) => {
  res.json({
    message: 'POST to /api'
  });
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