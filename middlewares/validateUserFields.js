const { validationResult } = require('express-validator');

// This is a generic validator used to validate for all routes. It checks if there is any error in the errors
// array inside the req (request). If there is any, it returns the errors to the client directly with a 400 status.

const validateUserFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
}

module.exports = {
  validateUserFields
};