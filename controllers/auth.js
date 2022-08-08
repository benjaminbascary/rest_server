// Types helpers
const { response, request } = require("express")



// GET
const getLoginController = (req = request, res = response, next) => {
  res.json({
    message: 'You are in the login page'
  })
}



// POST
const postLoginController = (req = request, res = response, next) => {
  res.json({
    message: 'You are trying to log-in!'
  });
}

module.exports = {
  postLoginController,
  getLoginController
};