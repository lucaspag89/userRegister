const { hashPassword } = require('../utils/hash');

exports.hashPassword = async (data) => {
  const password = await hashPassword(data);

  return password;
}