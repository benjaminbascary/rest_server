// Models for validating incoming requests
const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async (role = '') => {
  // if custom validation does not throw new Error it passes
  const roleExists = await Role.findOne({role: role});
  if (!roleExists) {
    throw new Error(`The role >${role}< is not registered in DB.`);
  }
}

const emailExists = async (email = '') => {
  const emailExists = await User.findOne({email: email});
  if (emailExists) {
    throw new Error(`The email >${email}< is already used.`)
  }
}

module.exports = {
  isRoleValid,
  emailExists,
};
