// Types helpers
const { response, request } = require("express")
// Models
const User = require('../models/user');
// Password decryption/encryption
const bcryptjs = require('bcryptjs')



/**
 * GET - getLoginController
 * @param {request} req incoming request
 * @param {response} res server response
 * @returns
 */
const getLoginController = (req, res, next) => {
  res.json({
    message: 'You are in the login page'
  })
}

/**
 * POST - postLoginCOntroller
 * @param {request} req incoming request
 * @param {response} res server response
 * @returns json with either ok or error
 */
const postLoginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Verify if user exists
    const user = await User.findOne({email: email});
    if (!user) {
      return res.status(400).json({message: "email not found."})
    }

    // Verify if the user is still active (status)
    if (!user.status) {
      return res.json({message: "user is not active."})
    }

    // Verify the password
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.json({message: "wrong password"})
    }

    // Generate the JWT (jason web token)

    res.json({
      message: 'ok',
      email,
      password
    })        
  } catch (error) {
    // Response with internal server error
    res.status(500).json({ 
      Error: error,
      message: 'Please talk to the server administrator.'
    });
  }
}

module.exports = {
  postLoginController,
  getLoginController
};