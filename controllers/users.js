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

const postUsers = (req, res) => {
  const { userName = 'No name', lastName = 'No last name', apiKey } = req.query;
  res.json({
    query: req.query,
    userName,
    lastName,
    apiKey
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