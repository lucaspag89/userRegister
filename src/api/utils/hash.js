const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
}

exports.comparePassword = async (password, hash) => {
  return result = await bcrypt.compare(password, hash);
}