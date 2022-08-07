// Models for validating incoming requests
const Role = require('../models/role');

const isRoleValid = async (role = '') => {
  // if custom validation does not throw new Error it passes
  const roleExists = await Role.findOne({role: role});
  if (!roleExists) {
    throw new Error(`The role >${role}< is not registered in DB`);
  }
}

module.exports = {
  isRoleValid
};