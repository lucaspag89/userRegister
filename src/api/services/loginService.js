const { comparePassword } = require('../utils/hash');
const { findByUsername } = require('../repository/userRepository');
const { jwtToken } = require('../utils/jwt')

exports.authenticate = async (data) => {
  const user = await findByUsername(data.userName);

  if (!user || !(await comparePassword(data.password, user.password))) {
    return null;
  }

  //authentication successful
  return token = jwtToken(data.userName);
}